import React from "react";
import {TouchableOpacity, View, StyleSheet, Platform, TouchableNativeFeedback} from "react-native";
import {AppRegularFont} from "./AppRegularFont";
import {THEME} from "../../theme/theme";

export const AppCustomButton = ({children, color=THEME.MAIN_COLOR, onPress, height= 38}) => {
    const System = Platform.OS === 'android' ? TouchableNativeFeedback  : TouchableOpacity

    return (
        <System onPress={onPress} activeOpacity={0.7}>
            <View style={{...styles.btn, backgroundColor: color, height: height}}>
                <AppRegularFont style={styles.text} >
                    {children}
                </AppRegularFont>
            </View>
        </System>
    )
}

const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#fff'
    }
})