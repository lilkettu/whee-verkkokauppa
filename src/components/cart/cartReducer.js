const ADD_ITEM = "whee/cart/ADD_ITEM";

const initialState = {
    itemsInCart: 0
}

const cartReducer = (state = initialState, action) => {
    if (action.type === ADD_ITEM) {
        console.log("add item")
        return {
            ...state,
            itemsInCart: state.itemsInCart + 1
        }
    }
    return state;
}

export const addItem = () => ({
    type: ADD_ITEM
})

export default cartReducer