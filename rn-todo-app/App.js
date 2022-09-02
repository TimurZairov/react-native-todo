import React, {useEffect, useCallback} from "react";
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View, Alert} from 'react-native';
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import {Navbar} from "./src/components/Navbar";
import {useState} from "react";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";


SplashScreen.preventAutoHideAsync();

export default function App() {
    const [isReady, setIsReady] = useState(false)
    const [todoOpen, setTodoOpen] = useState(null)
    const [todos, setTodos] = useState([
        {
            id: '123',
            title: 'Купить варенье'
        },
        {
            id: '321',
            title: 'Схавать варенье'
        }
    ])

    const openTodo = (id) => {
        setTodoOpen(todos.find(todo => todo.id === id))
    }


    const removeTodo = (id, title) => {
        Alert.alert(
            "Удаление",
            `Вы дествильено хотите удалить элемент "${title}"?`,
            [
                {
                    text: "Cancel",
                    style: "positive"
                },
                {
                    text: "Удалить", onPress: () => {
                        setTodos(todos.filter(todo => {
                            return todo.id !== id
                        }))
                    },
                    style: "negative"
                }
            ]
        );
        setTodoOpen(null)
    }

    const editTodo = (id, title) => {
        const todo = todos.filter(item => {
            if (item.id === id) {
                return item.title = title
            }
        })
        return todo
    }

    const backHandler = () => {
        setTodoOpen(null)
    }
    // 1 так подключаем функции для подключения шрифтов
    useEffect(() => {
        async function prepare() {
            try {
                // Pre-load fonts, make any API calls you need to do here
                await Font.loadAsync({
                    'osvald-bold': require('./assets/Oswald/static/Oswald-Bold.ttf'),
                    'osvald-regular': require('./assets/Oswald/static/Oswald-Regular.ttf')
                });
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setIsReady(true);
            }
        }

        prepare();
    }, [isReady]);
    // 2 так подключаем функции для подключения шрифтов вызываем проверку и hideAsync коллбэком после загрузки будт все шрифты подключены
    const onLayoutRootView = useCallback(async () => {
        if (isReady) {
            await SplashScreen.hideAsync();
        }
    }, [isReady]);

    if (!isReady) {
        return null;
    }

    return (
        <View onLayout={onLayoutRootView}>
            <Navbar title='Todo App'/>
            <View style={styles.container}>
                {!todoOpen ?
                    <MainScreen todos={todos} setTodos={setTodos} openTodo={openTodo} removeTodo={removeTodo}/> :
                    <TodoScreen todoOpen={todoOpen} backHandler={backHandler} removeTodo={removeTodo}
                                editTodo={editTodo}/>}

            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 15
    }
});
