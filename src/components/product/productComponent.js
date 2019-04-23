import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Product = ({ id, name, description, price, image, addItem }) => {
    return (
        <ProductContainer>
            <img src={image}></img>
            <Left>
                <Name>{name}</Name>
                <p>{description}</p>
            </Left>
            <Right>
                <Price>{price} €</Price>
                <AddButton
                    onClick={() => addItem(id, price)}>
                    Add to cart
                </AddButton>
            </Right>
        </ProductContainer>
    )
}

const ProductContainer = styled.article`
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
    padding: 1em;
`

const Name = styled.h2`
    font-size: 2em;
    font-weight: bold;
    font-style: italic;
`

const Right = styled.div`
    padding: 1em;
`

const Price = styled.p`
    font-size: xx-large;
    display: flex;
    justify-content: flex-end;
`

const AddButton = styled.button`
    background: white;
    text-transform: uppercase;
    font-size: 1.15em;
    padding: 0.5em 1.25em;
    border: 1px solid;
    font-family: 'Playfair Display', serif;

    :active {
        background: black;
        color: white;
    }
`

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    addItem: PropTypes.func
}

export default Product