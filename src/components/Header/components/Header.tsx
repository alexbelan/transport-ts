import React from "react"
import { StyleSheet, View } from "react-native"
import Button from "@src/ui/button/components/Button"
import { ListIcon, MapIcon, SettingIcon } from "@ui/icons"
import ButtonIcon from "@src/ui/button/components/ButtonIcon"
import Filter from "./Filter"
import { useState } from "react"
import { useLang } from "@context/LanguageProvider"
import { useNavigation } from "@react-navigation/native"
import { StackNavigation } from "@interfaces/index"
import { useScreenValues } from "@src/context/ScreenValuesProvider"

const Header = () => {
    const {translate} = useLang()
    const { screen, setScreen } = useScreenValues()
    const navigate = useNavigation<StackNavigation>()
    const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false)

    return (
        <>
            <Filter isOpen={isOpenFilter} />
            <View style={styles.root}>
                <Button onPress={() => setIsOpenFilter(prev => !prev)}>
                    {translate.filter}
                </Button>
                <View style={styles.btns}>
                    <ButtonIcon onPress={() => navigate.navigate('Setting')} radius={50}>
                        <SettingIcon width={'35'} height={'35'} color={'#05BCFF'} />
                    </ButtonIcon>
                    {screen === 'list' ? (
                        <ButtonIcon onPress={() => setScreen('map')} radius={50}>
                            <MapIcon width={'35'} height={'35'} color={'#05BCFF'} />
                        </ButtonIcon>
                    ) : (
                        <ButtonIcon onPress={() => setScreen('list')} radius={50}>
                            <ListIcon width={'35'} height={'35'} color={'#05BCFF'} />
                        </ButtonIcon>
                    )}
                </View>
                
            </View>
        </>
    )
}

export default Header

const styles = StyleSheet.create({
    root: {
        position: 'relative',
        backgroundColor: '#FFFFFF',
        zIndex: 100,
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 60
    }, 
    btns: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
})