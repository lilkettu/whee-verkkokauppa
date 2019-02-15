import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components'

const Product = ({ name, description, price }) => {
    return (
        <Item>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price} €</p>
        </Item>
    )
}

const Item = styled.li`
    padding: 10px 60px
    font-size: large
`

Product.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

export default Product;