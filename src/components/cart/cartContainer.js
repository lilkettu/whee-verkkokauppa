import { connect } from 'react-redux'
import Cart from './cartComponent'

const mapStatetoProps = state => ({
    itemsInCart: state.cart.itemsInCart
})

const CartContainer = connect(mapStatetoProps)(Cart)

export default CartContainer