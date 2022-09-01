import React from "react";
import {StyleSheet, View} from "react-native";

export const AppCard = (props) => {
   return (
       <View style={ {...styles.card, ...props.style} }>
           {props.children}
       </View>
   )
}

const styles = StyleSheet.create({
    card: {
        padding: 15,
        borderColor: '#b2b2b2',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOffset: { width: 2, height: 2},
        shadowOpacity: 0.3
    }
})