import { combineReducers, createStore } from "redux";
import helloReducer from "./components/hello/helloReducer";
import productReducer from "./components/product/productReducer"

const reducers  = combineReducers({
    hello: helloReducer,
    product: productReducer
});

export const store = createStore(reducers);