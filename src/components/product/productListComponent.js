import React from "react"
import PropTypes from "prop-types"
import Product from "./productComponent"
import styled from 'styled-components'

const ProductList = ({ products, addItem }) => {
    return (
        <List>
            {products.map(product => (
                <Item key={product.id}>
                    <Product {...product} addItem={addItem} />
                </Item>
            ))}
        </List>
    )
}

const List = styled.ul`
    list-style-type: none;
`

const Item = styled.li`
    border-bottom: 0.06em solid ${props => props.theme.lightGrey};
    :last-of-type {
        border-bottom: 0;
    }
`

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired
}

export default ProductList;