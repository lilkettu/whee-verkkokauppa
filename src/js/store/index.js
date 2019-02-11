import { createStore } from "redux";
import helloReducer from "../reducers/index";

const store = createStore(helloReducer);

export default store;