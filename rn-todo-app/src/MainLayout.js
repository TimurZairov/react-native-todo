import {Alert, StyleSheet, View} from "react-native";
import React, {useContext, useState} from "react";

import {THEME} from "./theme/theme";
import {Navbar} from "./components/Navbar";
import {MainScreen} from "./screens/MainScreen";
import {TodoScreen} from "./screens/TodoScreen";
import {StatusBar} from "expo-status-bar";
import {TodoContext} from "./context/todo/todoContext";

export const MainLayout =() => {
    const {todos} = useContext(TodoContext)
    const [todoOpen, setTodoOpen] = useState(null)
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


    const removeTodo = (id, title) => {
        // Alert.alert(
        //     "Удаление",
        //     `Вы дествильено хотите удалить элемент "${title}"?`,
        //     [
        //         {
        //             text: "Cancel",
        //             style: "positive"
        //         },
        //         {
        //             text: "Удалить", onPress: () => {
        //                 setTodos(todos.filter(todo => {
        //                     return todo.id !== id
        //                 }))
        //             },
        //             style: "negative"
        //         }
        //     ]
        // );
        // setTodoOpen(null)
    }

    const editTodo = (id, title) => {
        // const todo = todos.filter(item => {
        //     if (item.id === id) {
        //         return item.title = title
        //     }
        // })
        // return todo
    }

    const backHandler = () => {
        setTodoOpen(null)
    }

    return (
        <View >
            <Navbar title='Todo App'/>
            <View style={styles.container}>
                {!todoOpen ?
                    <MainScreen todos={todos}  removeTodo={removeTodo}/> :
                    <TodoScreen todoOpen={todoOpen} backHandler={backHandler} removeTodo={removeTodo}
                                editTodo={editTodo}/>}

            </View>
            <StatusBar style="auto"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        paddingVertical: 15
    }
});
