import React from "react"
import List from "./List"
import { Header } from "@components/Header"
import Map from "./Map"
import transports from '@data/transport.json'
import { useQuery } from "@tanstack/react-query"
import { useScreenValues } from "@context/ScreenValuesProvider"

const MainScreen = () => {
    const { screen, filter } = useScreenValues()
    
    const {data} = useQuery({
        queryKey: ['transportsData', filter],
        queryFn: () => {
            if(filter) {
                return transports.filter((item) => item.type === filter)
            }
            return transports
        }
    })

    return (
        <>
            <Header />
            {screen === 'list' ? (
                <List transports={data} />
            ) : (
                <Map transports={data} />
            )}
        </>
    )
}

export default MainScreen