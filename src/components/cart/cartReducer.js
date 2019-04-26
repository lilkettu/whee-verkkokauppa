const ADD_ITEM = "whee/cart/ADD_ITEM"
const REMOVE_ITEM = "whee/cart/REMOVE_ITEM"
const CHECKOUT = "whee/cart/CHECKOUT"

const initialState = {
    cart: {
        1: 0,
        2: 0,
        3: 0
    }
}

const cartReducer = (state = initialState, action) => {
    let cart = Object.assign({}, state.cart)

    switch (action.type) {
        case ADD_ITEM:
            cart[action.id]++
            return {...state, cart}

        case REMOVE_ITEM:
            if (cart[action.id] > 0) {
                cart[action.id]--
            }
            return {...state, cart}

        case CHECKOUT:
            Object.keys(cart).forEach(item => cart[item] = 0)
            return {...state, cart}

        default:
            return state
    }
}

export const addItem = id => ({
    type: ADD_ITEM,
    id
})

export const removeItem = id => ({
    type: REMOVE_ITEM,
    id
})

export const checkout = () => ({
    type: CHECKOUT
})

export default cartReducer