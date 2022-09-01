import React from "react";
import {Text, View, StyleSheet, Button} from "react-native";
import {THEME} from '../theme/theme'


export const TodoScreen = ({ todoOpen, backHandler }) => {
    return (
        <>
            <View style={styles.todoContainer}>
                {todoOpen ? <Text>{todoOpen.title}</Text> : {}}
            </View>
            <View style={styles.containerBtn}>
                <View style={styles.btn}>
                    <Button color={THEME.GREY_COLOR} title='Назад' onPress={backHandler}/>
                </View>
                <View style={styles.btn}>
                    <Button color={THEME.DANGER_COLOR} title='Удалить' />
                </View>

            </View>
        </>

    )
}

const styles = StyleSheet.create({
    todoContainer: {
        width: '100%',
        height: 90,
        borderColor: '#b2b2b2',
        borderWidth: 1,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    containerBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        width: '45%',
    }
})