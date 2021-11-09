import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./RooReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

export default store;