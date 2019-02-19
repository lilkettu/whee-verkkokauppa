import React from "react"
import PropTypes from "prop-types"
import Product from "./productComponent"
import styled from 'styled-components'

const ProductList = ({ products, addItem }) => {
    return (
        <List>
            {products.map(product => (
                <li>
                    <Product key={product.id} {...product} addItem={addItem} />
                </li>
            ))}
        </List>
    )
}

const List = styled.ul`
    padding: 20px;
    list-style-type: none;
`

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired
}

export default ProductList;