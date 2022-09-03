import React, {useState} from "react";
import {Button, Modal, TextInput, View, StyleSheet, Alert} from "react-native";
import {THEME} from '../theme/theme'
import {AppCustomButton} from "./ui/AppCustomButton";

import {MaterialIcons} from "@expo/vector-icons";

export const EditModal = ({visible, setVisible, todoOpen, editTodo }) => {
    const [ title, setTitle ] = useState(todoOpen.title)
    const changeHandler = (id) => {
        if(title.trim().length < 3){
            Alert.alert('Ошибка', `Название задания сейчас ${title.length} символа, должно быть больше 3 символов`)
        }else {
            editTodo(id, title)
            setVisible(false)
        }
    }

    return (
        <Modal
            visible={visible}
            animationType='slide'
            transparent={false}
            presentationStyle='pageSheet'
        >
            <View style={styles.wrapper}>
                <TextInput style={styles.textInput} value={title} onChangeText={setTitle}/>
                <View style={styles.button}>
                    <AppCustomButton  onPress={() => setVisible(false)}>
                        <MaterialIcons name='cancel' size={16}>
                            Отмена
                        </MaterialIcons>
                    </AppCustomButton>

                    <AppCustomButton color={THEME.DANGER_COLOR} onPress={() => changeHandler(todoOpen.id)}>
                        <MaterialIcons name='save' size={16}>
                            Сохранить
                        </MaterialIcons>
                    </AppCustomButton>

                    {/*<Button color={THEME.DANGER_COLOR} title='Отменить' onPress={() => setVisible(false)}/>*/}
                    {/*<Button title='Сохранить' onPress={() => changeHandler(todoOpen.id)}/>*/}
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        width: '80%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#eaeaea',
        borderRadius: 3,
        padding: 5,
        paddingHorizontal: 15,
        marginBottom: 30
    },
    button: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-around'
    }
})
