import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Product = ({ id, name, description, price, addItem }) => {
    return (
        <Item>
            <Name>{name}</Name>
            <Description>{description}</Description>
            <Price>{price} €</Price>
            <AddButton
                onClick={() => addItem(id)}>
                Add to cart
            </AddButton>
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

const AddButton = styled.button`
    background: white
    text-transform: uppercase
    font-size: large
    font-weight: bold
    padding: 8px 20px
    border: 1px solid
    font-family: 'Playfair Display', serif;

    :active {
        background: black
        color: white
    }
`

Product.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    addItem: PropTypes.func.isRequired
}

export default Product;