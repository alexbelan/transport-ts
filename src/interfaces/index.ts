import { ReactElement, ReactNode, ReactPortal } from "react";
import { NavigationProp } from "@react-navigation/native"

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

type ReactNodeArray = Array<ReactNode>
type ReactNodeElement = ReactNode | ReactChild | ReactNodeArray | ReactPortal |  null | undefined;

export interface PropsReactChildren {
  children: ReactNodeElement
}

export type ScreenNames = ["Main", "Setting", "Driver"]
export type RootStackParamList = Record<ScreenNames[number], undefined>
export type StackNavigation = NavigationProp<RootStackParamList>

export type TypeTS = 'passenger' | 'cargo' | 'special_transport'

export interface Transport {
  id: number,
  type: string,
  driver: string,
  phone: string,
  coordinate: {
    latitude: number,
    longitude: number
  }
}

export interface AppState {
  filter: TypeTS | null,
  screen: 'map' | 'list',
  transports: Transport[],
  driver: number | null
}

export interface Colors {
  [key: string]: string
}