import {
  ADD_ICE_CREAM,
  BUY_ICE_CREAM,
  RESET_ICE_CREAMS,
} from "./iceCreamTypes";

const initialState = {
  numOfIceCreams: 15,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      if (state.numOfIceCreams > 0) {
        return {
          ...state,
          numOfIceCreams: state.numOfIceCreams - 1,
        };
      } else {
        return {
          ...state,
          numOfIceCreams: 0,
        };
      }
    case ADD_ICE_CREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + 1,
      };
    case RESET_ICE_CREAMS:
      return {
        ...state,
        numOfIceCreams: initialState.numOfIceCreams,
      };

    default:
      return state;
  }
};

export default iceCreamReducer;
