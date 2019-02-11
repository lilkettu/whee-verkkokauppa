import { HELLO_WORLD } from "../constants/action-types";
import { combineReducers } from 'redux'

const initialState = {
    text: 'Hello World!'
}
  
const helloWorld = (state = initialState, action) => {
    if (action.type === HELLO_WORLD) {
        return Object.assign({}, state, {
            text: 'Hello World!'
        });
    }
    return state;
}

const helloReducer = combineReducers({
    helloWorld
})
  
export default helloReducer;