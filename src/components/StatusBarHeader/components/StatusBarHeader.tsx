import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Dimensions, Platform, StyleSheet, View } from "react-native";

const StatusBarHeader = () => {
    return (
        <View style={{...styles.root}}>
            <StatusBar style="dark" />
        </View>
    )
}

export default StatusBarHeader

const styles = StyleSheet.create({
    root: {
        position: 'relative',
        backgroundColor: '#FFFFFF',
        zIndex: 100,
        width: "100%",
        height: Platform.OS === 'ios' && Dimensions.get('screen').height >= 843 ? 59 : 25
    }
})