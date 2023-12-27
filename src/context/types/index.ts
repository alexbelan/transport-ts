export interface LangContextValue {
    lang: string | null,
    translate: {
        [key: string]: string
    },
    setLang: (langValue: string) => void
}