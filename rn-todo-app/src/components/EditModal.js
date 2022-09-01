import React from "react";
import {Button, Modal, TextInput, View, StyleSheet} from "react-native";
import {THEME} from '../theme/theme'

export const EditModal = ({visible, setVisible}) => {
    return (
        <Modal
            visible={visible}
            animationType='slide'
            transparent={false}
            presentationStyle='pageSheet'
        >
            <View style={styles.wrapper}>
                <TextInput style={styles.textInput}/>
                <View style={styles.button}>
                    <Button color={THEME.DANGER_COLOR} title='Отменить' onPress={() => setVisible(false)}/>
                    <Button title='Сохранить'/>
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
