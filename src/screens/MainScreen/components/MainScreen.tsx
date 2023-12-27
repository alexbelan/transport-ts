import React from "react"
import { useEffect } from "react"
import List from "./List"
import { Header } from "@components/Header"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@store/index"
import Map from "./Map"
import { setTransports } from "@store/reducers/appReducer"
import transports from '@data/transport.json'

const MainScreen = () => {
    const dispatch = useDispatch()
    const screen = useSelector((state: RootState) => state.app.screen)
    const filter = useSelector((state: RootState) => state.app.filter)
    const transportsData = useSelector((state: RootState) => state.app.transports)
    

    useEffect(() => {
        if(filter !== null) {
            dispatch(setTransports(transports.filter((item) => item.type === filter)))
        } else {
            dispatch(setTransports(transports))
        }
    }, [filter])

    return (
        <>
            <Header />
            {screen === 'list' ? (
                <List transports={transportsData} />
            ) : (
                <Map transports={transportsData} />
            )}
        </>
    )
}

export default MainScreen