import { connect } from 'react-redux'
import Cart from './cartComponent'

const mapStatetoProps = state => ({
    addedProducts: state.cart.addedProducts
})

const CartContainer = connect(mapStatetoProps)(Cart)

export default CartContainer