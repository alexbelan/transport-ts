import React from "react"
import { StyleSheet, TouchableHighlight, View } from "react-native"
import { PropsButtonIcon } from "../types"

const ButtonIcon = ({
    children,
    color = 'transparent',
    radius = 30,
    onPress
}: PropsButtonIcon) => {
    return (
        <TouchableHighlight 
            style={{...styles.root, borderRadius: radius / 2, width: radius, height: radius}}
            underlayColor='rgba(0,0,0, 0.17)'
            onPress={onPress}>
                <View style={{...styles.btnView, borderRadius: radius / 2, backgroundColor: color, width: radius, height: radius}}>
                    {children}
                </View>
        </TouchableHighlight>
    )
}

export default ButtonIcon

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44/2,
    },
    btnView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        borderRadius: 44/2,
    }
})