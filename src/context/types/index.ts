import { TypeTS } from "@src/interfaces"

export interface LangContextValue {
    lang: string | null,
    translate: {
        [key: string]: string
    },
    setLang: (langValue: string) => void
}

export interface ScreenValues {
    screen: 'list' | 'map',
    setScreen: (value: 'list' | 'map') => void
    filter: TypeTS | null,
    setFilter: (value: TypeTS | null) => void
}