import React from "react";
import {View, StyleSheet, Platform} from 'react-native'
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
        paddingBottom: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        ...Platform.select({
            ios: {
                borderBottomColor: THEME.MAIN_COLOR,
                borderWidth: 1

            },
            android: {
                backgroundColor: THEME.MAIN_COLOR
            }
        })
    },
    // navbarAndroid: {
    //     borderBottomColor: THEME.MAIN_COLOR,
    //     borderWidth: 1
    //
    // },
    // navbarIos: {
    //     backgroundColor: THEME.MAIN_COLOR
    // },
    text: {
        fontSize: 30,
        color: '#FFF',
        backgroundColor: 'transparent'
    }
})