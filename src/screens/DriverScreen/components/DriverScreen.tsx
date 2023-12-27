import React from "react"
import { View, Text, StyleSheet, Linking, Platform } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import Button from "@src/ui/button/components/Button"
import FieldText from "./FieldText"
import transport from '@data/transport.json'
import { useEffect, useState } from "react"
import { Transport } from "@interfaces/index"
import { RootState } from "@store/index"
import Map from "./Map"
import { HeaderScreen } from "@components/HeaderScreen"
import { useLang } from "@context/LanguageProvider"
import { setDriver } from "@store/reducers/appReducer"
import { useNavigation } from "@react-navigation/native"

const DriverScreen = () => {
    const navigation = useNavigation()
    const {translate} = useLang()
    const dispatch = useDispatch()
    const driverId = useSelector((state: RootState) => state.app.driver)
    const [driverData, setDriverData] = useState<Transport | null>(null)

    useEffect(() => {
        setDriverData(() => {
            if(typeof driverId === "number") {
                return transport.find(item => item.id === driverId) || null
            }
            return null
        })
    }, [driverId])

    const onBack = () => {
        dispatch(setDriver(null))
        navigation.goBack()
    }

    return (
        <View style={styles.root}>
            <HeaderScreen 
                title={driverData?.driver ? driverData?.driver : ''}
                onBack={onBack}
                />
            <Text style={styles.textHeader}></Text>
            {typeof driverData?.phone === "string" &&
                 <FieldText 
                    title={translate.phone}
                    value={driverData.phone}
                />
            }
            {typeof driverData?.type === "string" &&
                 <FieldText
                    title={translate.category}
                    value={translate[driverData.type]}
                />
            }
            {(driverData?.type === 'passenger' || driverData?.type === 'cargo' || driverData?.type === 'special_transport') &&
                <Map type={driverData?.type} coordinate={driverData?.coordinate}  />
            }
            <View>
                <Button 
                    style={styles.btn} width={'100%'}
                    onPress={() => Linking.openURL(Platform.OS !== 'android' ? `telprompt:${driverData?.phone}` : `tel:${driverData?.phone}`)} 
                >
                    {translate.call}
                </Button>
                <Button style={styles.btn} width={'100%'}
                    onPress={() => Linking.openURL(`whatsapp://send?phone=${driverData?.phone}&text=${'Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе'}`)} 
                >
                    {translate.write}
                </Button>
            </View>
        </View>
    )
}

export default DriverScreen

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 10,
    },
    textHeader: {
        fontSize: 30,
        fontWeight: '700',
        marginVertical: 10,
    },
    btn: {
        marginVertical: 5,
        paddingVertical: 10
    }
})