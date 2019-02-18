import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Product = ({ name, description, price }) => {
    return (
        <Item>
            <Name>{name}</Name>
            <Description>{description}</Description>
            <Price>{price} €</Price>
            <CartButton>Add to cart</CartButton>
        </Item>
    )
}

const Item = styled.li`
    padding: 10px 60px
`

const Name = styled.h2`
    font-size: xx-large
    font-weight: bold
    font-style: italic
`

const Description = styled.p`
`

const Price = styled.p`
    font-size: xx-large
`

const CartButton = styled.button`
    background: white
    text-transform: uppercase
    font-size: large
    font-weight: bold
    padding: 8px 20px
    border: 1px solid
   font-family: 'Playfair Display', serif;
`

Product.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

export default Product;