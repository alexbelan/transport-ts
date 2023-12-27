import React from "react"
import { View, Text, StyleSheet, Linking, Platform } from "react-native"
import Button from "@ui/button/components/Button"
import FieldText from "./FieldText"
import transport from '@data/transport.json'
import Map from "./Map"
import { HeaderScreen } from "@components/HeaderScreen"
import { useLang } from "@context/LanguageProvider"
import { useQuery } from "@tanstack/react-query"
import { useNavigation } from "@react-navigation/native"

const DriverScreen = ({route}) => {
    const navigation = useNavigation()
    const {translate} = useLang()

    const {data} = useQuery({
        queryKey: ['transportData', route.params.id],
        queryFn: () => {
            return transport.find(item => item.id === route.params.id) || null
        }
    })

    const onBack = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.root}>
            <HeaderScreen 
                title={data?.driver ? data?.driver : ''}
                onBack={onBack}
                />
            <Text style={styles.textHeader}></Text>
            {typeof data?.phone === "string" &&
                 <FieldText 
                    title={translate.phone}
                    value={data.phone}
                />
            }
            {typeof data?.type === "string" &&
                 <FieldText
                    title={translate.category}
                    value={translate[data.type]}
                />
            }
            {(data?.type === 'passenger' || data?.type === 'cargo' || data?.type === 'special_transport') &&
                <Map type={data?.type} coordinate={data?.coordinate}  />
            }
            <View>
                <Button 
                    style={styles.btn} width={'100%'}
                    onPress={() => Linking.openURL(Platform.OS !== 'android' ? `telprompt:${data?.phone}` : `tel:${data?.phone}`)} 
                >
                    {translate.call}
                </Button>
                <Button style={styles.btn} width={'100%'}
                    onPress={() => Linking.openURL(`whatsapp://send?phone=${data?.phone}&text=${'Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе'}`)} 
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
    }
})