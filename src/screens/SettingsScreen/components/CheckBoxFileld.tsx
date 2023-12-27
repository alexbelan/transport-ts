import React from "react";
import { View, Text, StyleSheet} from "react-native";
import Checkbox from 'expo-checkbox';

interface PropsCheckbox {
    text: string,
    value: boolean,
    onChange: () => void
}

const CheckBox = ({
    text,
    value,
    onChange
}: PropsCheckbox) => {
    return (
        <View style={styles.root}>
            <Checkbox
                value={value}
                onValueChange={() => onChange()}
            />
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default CheckBox

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 10
    },
    text: {
        fontSize: 20,
        marginLeft: 10
    }
})

