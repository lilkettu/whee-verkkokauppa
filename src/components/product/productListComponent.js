import React from "react"
import PropTypes from "prop-types"
import Product from "./productComponent"
import styled from 'styled-components'

const ProductList = ({ products }) => {
    return (
        <List>
            {products.map(product => (
                    <Product key={product.id} {...product} />
            ))}
        </List>
    )
}

const List = styled.ul`
    padding: 20px
    list-style-type: none
`

ProductList.propTypes = {
    products: PropTypes.array
}

export default ProductList;