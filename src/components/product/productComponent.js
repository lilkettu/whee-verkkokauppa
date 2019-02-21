import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Product = ({ id, name, description, price, addItem }) => {
    return (
        <ProductContainer>
            <div>
                <Name>{name}</Name>
                <p>{description}</p>
            </div>
            <div>
                <Price>{price} €</Price>
                <AddButton
                    onClick={() => addItem(id, price)}>
                    Add to cart
                </AddButton>
            </div>
        </ProductContainer>
    )
}

const ProductContainer = styled.article`
    padding: 2rem 25%;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
`

const Name = styled.h2`
    font-size: xx-large;
    font-weight: bold;
    font-style: italic;
`

const Price = styled.p`
    font-size: xx-large;
    display: flex;
    justify-content: flex-end;
`

const AddButton = styled.button`
    background: white;
    text-transform: uppercase;
    font-size: large;
    font-weight: bold;
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

export default Product;