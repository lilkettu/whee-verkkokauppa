import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import ProductList from './productListComponent'
import {addItem} from './../cart/cartReducer'

const mapStateToProps = state => ({
	products: state.product.products
})

const mapDispatchToProps = dispatch => bindActionCreators({addItem}, dispatch);

const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(ProductList)

export default ProductContainer