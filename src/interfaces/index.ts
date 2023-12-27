import { ReactElement, ReactNode, ReactPortal } from "react";
import { NavigationProp } from "@react-navigation/native"

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

type ReactNodeArray = Array<ReactNode>
type ReactNodeElement = ReactNode | ReactChild | ReactNodeArray | ReactPortal |  null | undefined;

export interface PropsReactChildren {
  children: ReactNodeElement
}

export type ScreenNames = {
  Main: undefined,
  Setting: undefined,
  Driver: {id: number}
}
// export type RootStackParamList = Record<ScreenNames, undefined>
export type StackNavigation = NavigationProp<ScreenNames>

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
}

export interface Colors {
  [key: string]: string
}