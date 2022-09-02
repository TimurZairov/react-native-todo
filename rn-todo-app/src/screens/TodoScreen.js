import React, {useState} from "react";
import {Text, View, StyleSheet, Button} from "react-native";
import {THEME} from '../theme/theme'
import {AppCard} from "../components/ui/AppCard";
import {EditModal} from "../components/EditModal";




export const TodoScreen = ({ todoOpen, backHandler, removeTodo, editTodo}) => {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <EditModal visible={visible} setVisible={setVisible} todoOpen={todoOpen} editTodo={editTodo}/>
            <AppCard style={styles.appCard}>
                <View>
                    {todoOpen ? <Text style={styles.text}>{todoOpen.title}</Text> : {}}
                </View>
                <Button title='Редактировать' onPress={() => setVisible(true)}/>
            </AppCard>
            <View style={styles.containerBtn}>
                <View style={styles.btn}>
                    <Button color={THEME.GREY_COLOR} title='Назад' onPress={backHandler}/>
                </View>
                <View style={styles.btn}>
                    <Button color={THEME.DANGER_COLOR} title='Удалить' onPress={() => removeTodo(todoOpen.id, todoOpen.title)}/>
                </View>

            </View>
        </>

    )
}

const styles = StyleSheet.create({
    appCard: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        width: '45%',
    },
    text: {
        fontSize: 20
    }
})