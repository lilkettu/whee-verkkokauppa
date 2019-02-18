import { connect } from 'react-redux'
import ProductList from './productListComponent'

const mapStatetoProps = state => ({
    products: state.product.products
})

const ProductContainer = connect(mapStatetoProps)(ProductList)

export default ProductContainer