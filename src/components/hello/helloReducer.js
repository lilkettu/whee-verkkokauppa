// ducks

const CHANGE_TEXT = "whee/hello/CHANGE_TEXT";

const initialState = {
    text: 'Hello World!'
}
  
const helloReducer = (state = initialState, action) => {
    if (action.type === CHANGE_TEXT) {
        return {
            ...state,
            text: action.text
        };
    }
    return state;
}

export const changeText = text => ({
    type: CHANGE_TEXT,
    text
})

export default helloReducer;