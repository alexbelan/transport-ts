import React from "react"
import { createContext, useContext, useState } from "react"
import { PropsReactChildren, TypeTS } from "@interfaces/index"
import {  ScreenValues } from "./types"

const ScreenValuesContext = createContext<ScreenValues>({
    filter: null,
    setFilter: () => undefined,
    screen: 'list',
    setScreen: () => undefined,
})

export const useScreenValues = () => {
    return useContext(ScreenValuesContext)
}

export const ScreenValuesProvider = ({children}: PropsReactChildren) => {
    const [filter, setFilter] = useState<TypeTS | null>()
    const [screen, setScreen] = useState<'list' | 'map'>('list') 

    const value: ScreenValues = {
        filter,
        setFilter,
        screen,
        setScreen,
    }

    return (
        <ScreenValuesContext.Provider value={value}>
            {children}
        </ScreenValuesContext.Provider>
    )
}