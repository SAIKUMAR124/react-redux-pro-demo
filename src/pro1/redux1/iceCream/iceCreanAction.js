import { ADD_ICE_CREAM, BUY_ICE_CREAM } from "./iceCreamTypes"

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