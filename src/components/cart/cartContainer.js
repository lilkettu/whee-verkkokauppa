import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Cart from './cartComponent'
import { setQuantity, removeItem, checkout } from './cartReducer'

const mapStatetoProps = state => ({
    cart: state.cart.cart
})

const mapDispatchToProps = dispatch => bindActionCreators({setQuantity, removeItem, checkout}, dispatch);

const CartContainer = connect(mapStatetoProps, mapDispatchToProps)(Cart)

export default CartContainer