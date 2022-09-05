import React, {useContext, useState} from "react";
import {View, Alert, StyleSheet, TextInput, Keyboard} from 'react-native'
import {AppCustomButton} from "./ui/AppCustomButton";
import {Ionicons} from "@expo/vector-icons";
import {TodoContext} from "../context/todo/todoContext";

export const AddTodo = () => {
    const [title, setTitle] = useState('')

    const todoContext = useContext(TodoContext)

    const addTodo = () => {
        todoContext.todoAdd(title)
        if(title.trim()){
            setTitle('')
            Keyboard.dismiss()
        }else {
            Alert.alert('Введите текст')
        }

    }

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder='Введите текст...'
                onChangeText={setTitle}
                value={title}
                autoCorrect={false}
                autoCapitalize= 'none'
            />

            <AppCustomButton onPress={addTodo}>
                <Ionicons name='add' size={15}>
                    Добавить
                </Ionicons>
            </AppCustomButton>

            {/*<Button  color={THEME.MAIN_COLOR} title="Добавить" onPress={addTodo} />*/}
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        width: '60%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#eaeaea',
        borderRadius: 3,
        padding: 5,
        paddingHorizontal: 15
    },
})