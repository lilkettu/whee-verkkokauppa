import { connect } from 'react-redux'
import HeaderComponent from './headerComponent'

const mapStateToProps = state => ({
  cart: state.cart.cart
})

const HeaderContainer = connect(mapStateToProps)(HeaderComponent)

export default HeaderContainer