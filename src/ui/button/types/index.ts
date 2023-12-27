import { ReactNode } from "react"
import { ColorValue, ViewStyle } from "react-native"

export interface PropsButton {
    children: ReactNode,
    color?: string,
    textColor?: string,
    width?: 'auto' | '100%' | number
    style?: ViewStyle,
    onPress?: () => void
}

export interface PropsButtonIcon {
    children: ReactNode,
    color?: ColorValue,
    radius?: number
    onPress?: () => void
}