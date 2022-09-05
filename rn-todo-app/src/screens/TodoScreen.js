import React, {useState} from "react";
import { View, StyleSheet, Dimensions} from "react-native";
import {THEME} from '../theme/theme'
import {AntDesign} from '@expo/vector-icons'

import {AppCard} from "../components/ui/AppCard";
import {EditModal} from "../components/EditModal";
import {AppRegularFont} from "../components/ui/AppRegularFont";
import {AppCustomButton} from "../components/ui/AppCustomButton";





export const TodoScreen = ({ todoOpen, backHandler, removeTodo}) => {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <EditModal visible={visible} setVisible={setVisible} todoOpen={todoOpen}/>
            <AppCard style={styles.appCard}>
                <View>
                    {todoOpen ? <AppRegularFont style={styles.text}>{todoOpen.title}</AppRegularFont> : {}}
                </View>

                <AppCustomButton onPress={() => setVisible(true)}>
                    <AntDesign name='edit' size={18} />
                </AppCustomButton>
                {/*<Button title='Редактировать' onPress={() => setVisible(true)}/>*/}
            </AppCard>
            <View style={styles.containerBtn}>
                <View style={styles.btn}>
                    <AppCustomButton onPress={backHandler}>
                        <AntDesign name='back' size={18} />
                    </AppCustomButton>
                </View>

                    {/*<Button color={THEME.GREY_COLOR} title='Назад' onPress={backHandler}/>*/}

                <View style={styles.btn}>
                    <AppCustomButton onPress={() => removeTodo(todoOpen.id, todoOpen.title)} color={THEME.DANGER_COLOR}>
                        <AntDesign name='delete' size={18} />
                    </AppCustomButton>

                    {/*<Button color={THEME.DANGER_COLOR} title='Удалить' onPress={() => removeTodo(todoOpen.id, todoOpen.title)}/>*/}
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
        width: Dimensions.get('window').width / 3
        //width: Dimension.get('window').width > 400 ? 150 : 100 можно использовать тернарные операторы в стиля учитывая размер экрана
    },
    text: {
        fontSize: 20
    }
})