import { Transport, TypeTS } from "@interfaces/index"

export interface ReturnHooks {
    item: string | null,
    setItem: (data: string) => void,
}

export type useLocalStorageType = (name: string, data?: string) => ReturnHooks
