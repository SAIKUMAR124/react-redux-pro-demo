import { ADD_ICE_CREAM, BUY_ICE_CREAM, RESET_ICE_CREAMS } from "./iceCreamTypes"

export const buyIceCream=()=>{
    return {
        type: BUY_ICE_CREAM
    }
}

export const addIceCream=()=>{
    return {
        type: ADD_ICE_CREAM
    }
}

export const resetIceCreams=()=>{
    return {
        type: RESET_ICE_CREAMS
    }
}