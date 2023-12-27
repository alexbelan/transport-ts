import React from "react"
import { StyleSheet, Text, TouchableHighlight, View } from "react-native"
import { PropsButton } from "../types"

const Button = ({
    children,
    color = '#05BCFF',
    textColor = '#FFFFFF',
    width = 'auto',
    style = {},
    onPress
}: PropsButton) => {
    return (
        <TouchableHighlight 
            style={{...styles.root, ...style, width: width}}
            onPress={onPress}>
                <View style={{...styles.btnView, backgroundColor: color, width: width}}>
                    <Text style={{...styles.text, color: textColor}}>{children}</Text>
                </View>
        </TouchableHighlight>
    )
}

export default Button

const styles = StyleSheet.create({
    root: {
        borderRadius: 10,
        height: 'auto',
        width: '100%',
    },
    btnView: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        height: 'auto',
        width: '100%',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
    }
})