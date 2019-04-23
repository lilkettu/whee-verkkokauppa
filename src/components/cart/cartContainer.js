import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import CartHeader from './cartHeaderComponent'
import Cart from './cartComponent'
import { removeItem } from './cartReducer'

const mapStatetoProps = state => ({
    cart: state.cart.cart,
    total: state.cart.total
})

const mapDispatchToProps = dispatch => bindActionCreators({removeItem}, dispatch);

const CartContainer = connect(mapStatetoProps, mapDispatchToProps)(Cart)

export default CartContainer