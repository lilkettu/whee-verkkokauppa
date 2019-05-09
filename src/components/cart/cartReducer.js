const ADD_ITEM = "whee/cart/ADD_ITEM"
const REMOVE_ITEM = "whee/cart/REMOVE_ITEM"
const SET_QUANTITY = "whee/cart/SET_QUANTITY"
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
			if (cart[action.id] < 1) {
				cart[action.id] = 1
			}
			return {...state, cart}

		case REMOVE_ITEM:
			cart[action.id] = 0
			return {...state, cart}

		case SET_QUANTITY:
			cart[action.id] = action.pcs
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

export const setQuantity = (id, pcs) => ({
	type: SET_QUANTITY,
	id,
	pcs
})

export const checkout = () => ({
	type: CHECKOUT
})

export default cartReducer