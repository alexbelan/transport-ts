import { TypeTS } from "@interfaces/index"

export interface PropsFieldText {
    title: string,
    value: string
}

export interface PropsMap {
    type: TypeTS,
    coordinate: {
        latitude: number,
        longitude: number
    },
}