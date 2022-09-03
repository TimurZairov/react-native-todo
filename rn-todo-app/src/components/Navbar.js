import React from "react";
import {Text, View, StyleSheet} from 'react-native'
import {THEME} from "../theme/theme";
import {AppBold} from "./ui/AppBold";


export const Navbar = (props) => {
    return (
        <View style={styles.navbar}>
            <AppBold style={styles.text} >{props.title}</AppBold>
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
        fontSize: 30,
        color: '#FFF',
        backgroundColor: 'transparent'
    }
})