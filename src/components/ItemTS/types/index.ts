import { TypeTS } from "@interfaces/index";

export interface IconsProps {
    type: TypeTS
}

export interface ItemProps {
    id: number,
    title: string,
    type: TypeTS,
    secondary?: string
}