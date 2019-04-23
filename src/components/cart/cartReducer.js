const ADD_ITEM = "whee/cart/ADD_ITEM"
const REMOVE_ITEM = "whee/cart/REMOVE_ITEM"

const initialState = {
    cart: {
        1: 0,
        2: 0,
        3: 0
    },
    total: 0
}

const cartReducer = (state = initialState, action) => {
    if (action.type === ADD_ITEM) {
        const cart = state.cart
        cart[action.id]++

        return {
            ...state,
            cart: cart,
            total: state.total + action.price
        }
    }

    if (action.type === REMOVE_ITEM) {
        const cart = state.cart
        if (cart[action.id] > 0) {
            cart[action.id]--

            return {
                ...state,
                cart: cart,
                total: state.total - action.price
            }
        }

    }
    return state;
}

export const addItem = (id, price) => ({
    type: ADD_ITEM,
    id,
    price
})

export const removeItem = (id, price) => ({
    type: REMOVE_ITEM,
    id,
    price
})

export default cartReducer