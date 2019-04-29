import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Product = ({id, name, description, price, image, addItem}) => {
    const imageUrl = `/images/${image}`
    return (
        <ProductContainer>
            <Img src={imageUrl} />
            <Center>
                <Name>{name}</Name>
                <p>{description}</p>
            </Center>
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
    align-items: flex-end;
    padding: 3em;
    border-bottom: 0.06em solid ${props => props.theme.lightGrey};
`

const Center = styled.div`
    flex-basis: 60%;
`

const Name = styled.p`
    font-size: 1.75em;
    font-weight: bold;
    font-style: italic;
`

const Right = styled.div`
`
const Img = styled.img`
    height: 8rem;
    width: 8rem;
`

const Price = styled.p`
    font-size: 1.7em;
    display: flex;
    justify-content: flex-end;
`

const AddButton = styled.button`
    background: ${props => props.theme.white};
    text-transform: uppercase;
    font-size: 1.15em;
    padding: 0.5em 1.25em;
    border: 1px solid;
    font-family: 'Playfair Display', serif;

    :active {
        background: ${props => props.theme.black};
        color: ${props => props.theme.white};
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