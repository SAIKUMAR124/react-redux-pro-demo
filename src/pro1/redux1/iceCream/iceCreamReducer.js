import { ADD_ICE_CREAM, BUY_ICE_CREAM } from "./iceCreamTypes"

const initialState = {
    numOfIceCreams : 15
}

const iceCreamReducer = (state=initialState, action) => {
    switch(action.type){
        case BUY_ICE_CREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        case ADD_ICE_CREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + 1
            }

        default: return state
    }
}

export default iceCreamReducer;