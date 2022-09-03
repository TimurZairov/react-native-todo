import React from "react";
import {TouchableOpacity, View, StyleSheet} from "react-native";
import {AppRegularFont} from "./AppRegularFont";
import {THEME} from "../../theme/theme";

export const AppCustomButton = ({children, color=THEME.MAIN_COLOR, onPress, height= 38}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <View style={{...styles.btn, backgroundColor: color, height: height}}>
                <AppRegularFont style={styles.text} >
                    {children}
                </AppRegularFont>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        color: '#fff'
    }
})