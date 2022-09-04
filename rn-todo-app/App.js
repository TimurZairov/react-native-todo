import React, {useEffect, useCallback, useState} from "react";
import {View} from 'react-native';
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import {MainLayout} from "./src/MainLayout";
import {TodoState} from "./src/context/todo/TodoState";


SplashScreen.preventAutoHideAsync();

export default function App() {
    const [isReady, setIsReady] = useState(false)
    // const [todoOpen, setTodoOpen] = useState(null)
    // const [todos, setTodos] = useState([
    //     {
    //         id: '123',
    //         title: 'Купить варенье'
    //     },
    //     {
    //         id: '321',
    //         title: 'Схавать варенье'
    //     }
    // ])

    // const openTodo = (id) => {
    //     setTodoOpen(todos.find(todo => todo.id === id))
    // }
    //
    //
    // const removeTodo = (id, title) => {
    //     Alert.alert(
    //         "Удаление",
    //         `Вы дествильено хотите удалить элемент "${title}"?`,
    //         [
    //             {
    //                 text: "Cancel",
    //                 style: "positive"
    //             },
    //             {
    //                 text: "Удалить", onPress: () => {
    //                     setTodos(todos.filter(todo => {
    //                         return todo.id !== id
    //                     }))
    //                 },
    //                 style: "negative"
    //             }
    //         ]
    //     );
    //     setTodoOpen(null)
    // }
    //
    // const editTodo = (id, title) => {
    //     const todo = todos.filter(item => {
    //         if (item.id === id) {
    //             return item.title = title
    //         }
    //     })
    //     return todo
    // }
    //
    // const backHandler = () => {
    //     setTodoOpen(null)
    // }
    // 1 так подключаем функции для подключения шрифтов
    useEffect(() => {
        async function prepare() {
            try {
                // load fonts, make any API calls you need to do here
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
        <TodoState>
            <View  onLayout={onLayoutRootView}>
                <MainLayout/>
            </View>
        </TodoState>

        // <View onLayout={onLayoutRootView}>
        //     <Navbar title='Todo App'/>
        //     <View style={styles.container}>
        //         {!todoOpen ?
        //             <MainScreen todos={todos} setTodos={setTodos} openTodo={openTodo} removeTodo={removeTodo}/> :
        //             <TodoScreen todoOpen={todoOpen} backHandler={backHandler} removeTodo={removeTodo}
        //                         editTodo={editTodo}/>}
        //
        //     </View>
        //     <StatusBar style="auto"/>
        // </View>
    );
}
