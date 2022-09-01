import React from "react";
import {Text, View, StyleSheet} from 'react-native'
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
        backgroundColor: '#67b3f6',
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