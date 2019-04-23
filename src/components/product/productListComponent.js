import React from "react"
import PropTypes from "prop-types"
import Product from "./productComponent"
import styled from 'styled-components'

const ProductList = ({ products, addItem }) => {
    return (
        <List>
            {products.map(product => (
                <li key={product.id}>
                    <Product {...product} addItem={addItem} />
                </li>
            ))}
        </List>
    )
}

const List = styled.ul`
    list-style-type: none;
    margin: 0em 25%;
`

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired
}

export default ProductList;