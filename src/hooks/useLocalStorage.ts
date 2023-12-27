import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react"
import { useLocalStorageType, ReturnHooks } from "./types"

const useLocalStorage: useLocalStorageType = (name, data): ReturnHooks => {
    const [value, setValue] = useState<string | null>(null)

    useEffect(() => {
        if(data) {
            AsyncStorage.setItem(name, data)
            setValue(data)
        } else {
            AsyncStorage.getItem(name).then(res => {
                if(res !== '' && !!res) {
                    setValue(res)
                } else {
                    setValue('')
                }
            })
        }
    }, [])

    const setItem = (data: string) => {
        AsyncStorage.setItem(name, data)
        setValue(data)
    }

    return {
        item: value,
        setItem
    }
}

export default useLocalStorage