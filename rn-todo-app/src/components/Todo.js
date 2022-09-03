import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";

import {AppBold} from "./ui/AppBold";

export const Todo =( { todo, openTodo, removeTodo } ) => {

    return (
        <TouchableOpacity  onPress={() => openTodo(todo.id)} onLongPress={() => {removeTodo(todo.id, todo.title)}}>
            <View style={styles.todo} >
                <AppBold style={styles.text} > Задача: {todo.title}</AppBold>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#e5e5e5',
        marginTop: 15
    },
    text: {
        fontSize: 15,
        color: '#1e1e1f',
        fontFamily: 'osvald-bold',
    }
})