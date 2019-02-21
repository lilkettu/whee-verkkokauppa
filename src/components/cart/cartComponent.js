import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import { products } from '../../products.js'

const Cart = ({ itemsInCart, total, removeItem }) => {
    const productList = products.products;

    return (
        <>
            <Title>Cart</Title>
            <List>
                {productList.map((product =>
                    <Item key={product.id}>
                        <h2>{product.name}</h2>
                        <Quantity>Quantity: {itemsInCart[product.id]}</Quantity>
                        <RemoveButton
                            onClick={() => removeItem(product.id, product.price)}>
                            Remove
                        </RemoveButton>
                    </Item>
                ))}
            </List>
            <Total>Total: {total} €</Total>
        </>
    )
}

const Title = styled.h1`
    display: flex;
    justify-content: center;
`

const List = styled.ul`
    list-style-type: none;
    padding: 5em 35% 5em;
`

const Item = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 1em;
`

const Quantity = styled.p`
    display: flex;
    justify-content: center;
`

const RemoveButton = styled.button`
    background: white;
    text-transform: uppercase;
    border: 1px solid;
    padding: 1em;
    font-family: 'Playfair Display', serif;

    :active {
        background: black;
        color: white;
    }
`

const Total = styled.p`
    display: flex;
    justify-content: center;
    padding: 0em 5em 5em;
`

Cart.propTypes = {
    itemsInCart: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
    removeItem: PropTypes.func.isRequired
}

export default Cart;
