import { combineReducers, createStore } from "redux";
import helloReducer from "./components/hello/helloReducer";

const reducers  = combineReducers({
    hello: helloReducer
});

export const store = createStore(reducers);