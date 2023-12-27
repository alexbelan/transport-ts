import React, { useState } from "react"
import { StyleSheet, View, Text, Animated, Easing } from "react-native"
import Button from "@ui/button/components/Button"
import { MutableRefObject, useEffect, useRef } from "react"
import { useLang } from "@context/LanguageProvider"
import { PropsFilter } from "../types"
import { useScreenValues } from "@src/context/ScreenValuesProvider"

const Filter = ({isOpen}: PropsFilter) => {
    const {translate} = useLang()
    const {setFilter} = useScreenValues()
    const [filterValue, setFilterValue] = useState(null)
    const posFilter: MutableRefObject<Animated.Value> = useRef(new Animated.Value(-75))

    useEffect(() => {
        if(isOpen) {
            Animated.timing(posFilter.current, {
                toValue: 60,
                duration: 150,
                easing: Easing.ease,
                useNativeDriver: false,
            }).start()
        }
        if(!isOpen) {
            Animated.timing(posFilter.current, {
                toValue: -120,
                duration: 150,
                easing: Easing.ease,
                useNativeDriver: false,
            }).start()
        }
    }, [isOpen])

    return (
        <Animated.View style={{...styles.root, top: posFilter.current}}>
            <View style={styles.item}>
                <View>
                    <Text>{translate.cargo}</Text>
                </View>
                {filterValue === 'cargo' ? (
                    <Button
                        color={'#EB0000'}
                        onPress={() => setFilterValue(null)}>
                        {translate.remove}
                    </Button>
                ) : (
                    <Button
                        onPress={() => setFilterValue('cargo')}>
                        {translate.choose}
                    </Button>
                )}
            </View>
            <View style={styles.item}>
                <View>
                    <Text>{translate.passenger}</Text>
                </View>
                {filterValue === 'passenger' ? (
                    <Button
                        color={'#EB0000'}
                        onPress={() => setFilter(null)}>
                        {translate.remove}
                    </Button>
                ) : (
                    <Button
                        onPress={() => setFilterValue('passenger')}>
                        {translate.choose}
                    </Button>
                )}
            </View>
            <View style={styles.item}>
                <View>
                    <Text>{translate.special_transport}</Text>
                </View>
                {filterValue === 'special_transport' ? (
                    <Button
                        color={'#EB0000'}
                        onPress={() => setFilterValue(null)}>
                        {translate.remove}
                    </Button>
                ) : (
                    <Button
                        onPress={() => setFilterValue('special_transport')}>
                        {translate.choose}
                    </Button>
                )}
            </View>
            <View>
                <Button
                    onPress={() => setFilter(filterValue)}>
                    {translate.done}
                </Button>
            </View>
        </Animated.View>
    )
}

export default Filter

const styles = StyleSheet.create({
    root: {
        position: 'absolute',
        zIndex: 10,
        width: '100%',
        height: 185,
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#828282',
        borderBottomWidth: 1,
        paddingHorizontal: 10
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: 45,
    }
})