import React from "react";
import {Text, View, StyleSheet} from "react-native";

export const AppBold = ({ children, style }) => {
    return (
        <View>
            <Text style={{...styles.text, ...style}}>
                {children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'osvald-bold',
    }
})