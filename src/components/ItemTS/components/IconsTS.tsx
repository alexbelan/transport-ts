import React from "react";
import { 
    CargoIcon,
    PassengerIcon,
    SpecialTransportIcon
} from "@ui/icons";
import { IconsProps } from "../types";

const IconsTS = ({
    type
}: IconsProps) => {
    switch (type) {
        case 'cargo':
            return <CargoIcon />
        case 'passenger':
            return <PassengerIcon />
        case 'special_transport':
            return <SpecialTransportIcon />
        default:
            return <></>
    }
}

export default IconsTS