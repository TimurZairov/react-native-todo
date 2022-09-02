import {StatusBar} from 'expo-status-bar';
import { StyleSheet, View, Alert } from 'react-native';
import * as Font from 'expo-font'

import {Navbar} from "./src/components/Navbar";
import {useState} from "react";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";

async function loadApplication() {
    await Font.loadAsync({
        'osvald-bold': require('./assets/Oswald/static/Oswald-Bold.ttf'),
        'osvald-regular': require('./assets/Oswald/static/Oswald-Regular.ttf')
    })
}

export default function App() {
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
            if(item.id === id){
                return item.title = title
            }
        })
       return todo
    }

    const backHandler = () => {
        setTodoOpen(null)
    }

    return (
        <View>
            <Navbar title='Todo App'/>
            <View style={styles.container}>
                {!todoOpen ?
                    <MainScreen todos={todos} setTodos={setTodos} openTodo={openTodo} removeTodo={removeTodo}/> :
                    <TodoScreen todoOpen={todoOpen} backHandler={backHandler} removeTodo={removeTodo} editTodo={editTodo}/>}

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
