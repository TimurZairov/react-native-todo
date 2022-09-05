import {Alert, StyleSheet, View} from "react-native";
import React, {useContext, useState} from "react";

import {THEME} from "./theme/theme";
import {Navbar} from "./components/Navbar";
import {MainScreen} from "./screens/MainScreen";
import {TodoScreen} from "./screens/TodoScreen";
import {StatusBar} from "expo-status-bar";
import {TodoContext} from "./context/todo/todoContext";

export const MainLayout =() => {
    const {todos, todoRemove} = useContext(TodoContext)
    const [todoOpen, setTodoOpen] = useState(null)
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
                        todoRemove(id)
                    },
                    style: "negative"
                }
            ]
        );
    }


    const backHandler = () => {
        setTodoOpen(null)
    }

    return (
        <View >
            <Navbar title='Todo App'/>
            <View style={styles.container}>
                {!todoOpen ?
                    <MainScreen todos={todos} openTodo={openTodo}  removeTodo={removeTodo}/> :
                    <TodoScreen todoOpen={todoOpen} backHandler={backHandler} removeTodo={removeTodo}/>}

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
