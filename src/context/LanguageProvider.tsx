import React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { PropsReactChildren } from "@interfaces/index"
import useLocalStorage from "@hooks/useLocalStorage"
import lengJSON from "@data/lang.json"
import { LangContextValue } from "./types"

const LangContext = createContext<LangContextValue>({
    lang: 'ru',
    translate: lengJSON['ru'],
    setLang: () => undefined
})

export const useLang = () => {
    return useContext(LangContext)
}

export const LangProvider = ({children}: PropsReactChildren) => {
    const {item: lang, setItem} = useLocalStorage('lang')
    const [langData, setLangData] = useState({}) 

    useEffect(() => {
        if(typeof lang === 'string' && lang === 'en' || lang === 'ru') {
            setLangData(lengJSON[lang])
        } else {
            setItem('ru')
        }
    }, [lang])

    const setLang = (langValue: string) => {
        setItem(langValue)
    }

    const value: LangContextValue = {
        lang,
        setLang,
        translate: langData,
    }

    return (
        <LangContext.Provider value={value}>
            {children}
        </LangContext.Provider>
    )
}