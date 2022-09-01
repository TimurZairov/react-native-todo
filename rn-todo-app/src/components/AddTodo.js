import React, {useState} from "react";
import {View, Alert, StyleSheet, TextInput, Button} from 'react-native'

export const AddTodo = ({setTodos, todos}) => {
    const [title, setTitle] = useState('')

    const addTodo = () => {

        const newTodo = {
            id: Date.now().toString(),
            title: title
        }
        if(title.trim()){
            setTodos([newTodo, ...todos])
            setTitle('')
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
            <Button  color='#67b3f6' title="Добавить" onPress={addTodo} />
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        width: '75%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#eaeaea',
        borderRadius: 3,
        padding: 5,
        paddingHorizontal: 15
    },
})