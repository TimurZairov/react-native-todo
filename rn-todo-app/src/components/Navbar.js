import React from "react";
import {Text, View, StyleSheet} from 'react-native'
import {THEME} from "../theme/theme";


export const Navbar = (props) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text} >{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: THEME.MAIN_COLOR,
        paddingBottom: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    text: {
        color: '#f3f0ef',
        fontSize: 20,
        fontWeight: 'bold'
    }
})