const ADD_ITEM = "whee/cart/ADD_ITEM";

const initialState = {
    itemsInCart: []
}

const cartReducer = (state = initialState, action) => {
    if (action.type === ADD_ITEM) {
        return {
            ...state,
            itemsInCart: [...state.itemsInCart, action.id]
        }
    }
    return state;
}

export const addItem = id => ({
    type: ADD_ITEM,
    id
})

export default cartReducer