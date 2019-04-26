import { combineReducers, createStore } from "redux"
import helloReducer from "./components/hello/helloReducer"
import productReducer from "./components/product/productReducer"
import cartReducer from "./components/cart/cartReducer"

const reducers  = combineReducers({
    hello: helloReducer,
    product: productReducer,
    cart: cartReducer
})

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())