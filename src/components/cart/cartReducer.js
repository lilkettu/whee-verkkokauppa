const ADD_ITEM = "whee/cart/ADD_ITEM"
const REMOVE_ITEM = "whee/cart/REMOVE_ITEM"

const initialState = {
    cart: {
        1: 0,
        2: 0,
        3: 0
    }
}

const cartReducer = (state = initialState, action) => {
    if (action.type === ADD_ITEM) {
        let cart = Object.assign({}, state.cart)
        cart[action.id]++

        return {
            ...state,
            cart
        }
    }

    if (action.type === REMOVE_ITEM) {
        let cart = Object.assign({}, state.cart)
        
        if (cart[action.id] > 0) {
            cart[action.id]--
            
            return {
                ...state,
                cart
            }
        }

    }
    return state;
}

export const addItem = id => ({
    type: ADD_ITEM,
    id
})

export const removeItem = id => ({
    type: REMOVE_ITEM,
    id
})

export default cartReducer