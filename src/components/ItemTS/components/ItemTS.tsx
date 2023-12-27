import React from "react"
import { StyleSheet, View, Text, TouchableHighlight } from "react-native"
import { StackNavigation } from "@interfaces/index"
import IconsTS from "./IconsTS"
import { ItemProps } from "../types"
import { useNavigation } from "@react-navigation/native"

const ItemTS = ({
    id,
    type,
    title,
    secondary
}: ItemProps) => {
    const navigation = useNavigation<StackNavigation>()

    const navigateDriverScreen = () => {
        navigation.navigate('Driver', {
            id
        })
    }

    return (
        <TouchableHighlight onPress={navigateDriverScreen} underlayColor='rgba(0,0,0, 0.17)'>
            <View style={styles.root}>
                {!!type && 
                    <View style={styles.icon}>
                        <IconsTS type={type} />
                    </View>
                }
                <View>
                    <Text style={styles.text}>{title}</Text>
                    {!!secondary && 
                        <Text style={styles.secondary}>{secondary}</Text>
                    }
                </View>
            </View>
        </TouchableHighlight>
    )
}

export default ItemTS

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: "nowrap",
        width: '100%',
        height: 'auto',
        padding: 15
    },
    icon: {
        'width': 44,
        'marginRight': 15
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    secondary: {
        color: '#828282'
    }
})