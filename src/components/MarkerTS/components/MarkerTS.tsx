import React from "react"
import { StyleSheet, View } from "react-native"
import { CargoIcon, PassengerIcon, SpecialTransportIcon } from "@ui/icons"
import { colors } from "@theme/colors"
import { PropsMarkerTS } from "../types"

const MarkerTS = ({
    type
}: PropsMarkerTS) => {
    return (
        <View 
            style={{...styles.root, borderColor: colors[type]}}>
            {type === 'cargo' && 
                <CargoIcon color={colors[type]} width='28' height='28' />
            }
            {type === 'passenger' && 
                <PassengerIcon color={colors[type]} width='28' height='28' />
            }
            {type === 'special_transport' && 
                <SpecialTransportIcon color={colors[type]} width='28' height='28' />
            }
        </View>
    )
}

export default MarkerTS

const styles = StyleSheet.create({
    root: {
        width: 40,
        height: 40,
        borderRadius: 40/2,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2
    }
})