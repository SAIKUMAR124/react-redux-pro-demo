import { createStore } from "redux";
import rootReducer from "./RooReducer";

const store = createStore(rootReducer)

export default store;