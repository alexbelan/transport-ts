import React from "react"
import { StyleSheet, View, Text, Animated, Easing } from "react-native"
import Button from "@src/ui/button/components/Button"
import { MutableRefObject, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@store/index"
import { setFilter } from "@store/reducers/appReducer"
import { useLang } from "@context/LanguageProvider"
import { PropsFilter } from "../types"

const Filter = ({isOpen}: PropsFilter) => {
    const {translate} = useLang()
    const posFilter: MutableRefObject<Animated.Value> = useRef(new Animated.Value(-75))
    const dispatch = useDispatch()
    const filter = useSelector((state: RootState) => state?.app.filter)

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
                toValue: -75,
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
                {filter === 'cargo' ? (
                    <Button
                        color={'#EB0000'}
                        onPress={() => dispatch(setFilter(null))}>
                        {translate.remove}
                    </Button>
                ) : (
                    <Button
                        onPress={() => dispatch(setFilter('cargo'))}>
                        {translate.choose}
                    </Button>
                )}
            </View>
            <View style={styles.item}>
                <View>
                    <Text>{translate.passenger}</Text>
                </View>
                {filter === 'passenger' ? (
                    <Button
                        color={'#EB0000'}
                        onPress={() => dispatch(setFilter(null))}>
                        {translate.remove}
                    </Button>
                ) : (
                    <Button
                        onPress={() => dispatch(setFilter('passenger'))}>
                        {translate.choose}
                    </Button>
                )}
            </View>
            <View style={styles.item}>
                <View>
                    <Text>{translate.special_transport}</Text>
                </View>
                {filter === 'special_transport' ? (
                    <Button
                        color={'#EB0000'}
                        onPress={() => dispatch(setFilter(null))}>
                        {translate.remove}
                    </Button>
                ) : (
                    <Button
                        onPress={() => dispatch(setFilter('special_transport'))}>
                        {translate.choose}
                    </Button>
                )}
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
        height: 140,
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