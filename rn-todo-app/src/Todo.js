import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";

export const Todo =( { todo } ) => {

    return (
        <TouchableOpacity>
            <View style={styles.todo}>
                <Text style={styles.text} > Задача: {todo.title}</Text>
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
        color: '#1e1e1f'
    }
})