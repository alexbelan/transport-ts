import React from "react";
import { View, Text, StyleSheet} from "react-native";
import CheckBox from './CheckBoxFileld'
import { useLang } from "@context/LanguageProvider"
import { HeaderScreen } from "@components/HeaderScreen";


const SettingsScreen = () => {
    const {lang, setLang, translate} = useLang()
    return (
        <View style={styles.root}>
            <HeaderScreen title={translate.setting} />
            <Text style={styles.subTitle}>{translate.select_language}</Text>
            <CheckBox 
                text={'Русский'}
                value={lang === 'ru'}
                onChange={() => setLang('ru')}
            />
            <CheckBox 
                text={'English'}
                value={lang === 'en'}
                onChange={() => setLang('en')}
            />
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    root: {
        marginHorizontal: 10
    },
    subTitle: {
        fontSize: 25,
        fontWeight: '600'
    }
})