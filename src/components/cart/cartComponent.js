import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Link} from "react-router-dom"
import CartItem from './cartItemComponent'
import {products} from '../../products.js'

const Cart = ({cart, removeItem, checkout}) => {
    const productList = products.products;

    const itemCount = Object.values(cart).reduce((total, quantity) => total + quantity, 0)

    const totalPrice = (Object.values(cart)
        .map((item, i) => item * productList[i].price)
        .reduce((total, subtotal) => total + subtotal, 0))

    return (
        <CartContainer>
            <Left>
                <Border>
                    <Title>
                        <h1>Shopping cart</h1>
                        {itemCount === 1 ?
                            <h2>1 item</h2> :
                            <h2>{itemCount} items</h2>
                        }
                    </Title>
                    <List>
                        {productList.map((product =>
                            <li key={product.id}>
                                <CartItem product={product} quantity={cart[product.id]} removeItem={removeItem} />
                            </li>
                        ))}
                    </List>
                </Border>
            </Left>
            <Right>
                <Border>
                    <Total>Total</Total>
                    <Subtotal>
                        <p>Sub-total</p>
                        <p>{totalPrice} €</p>
                    </Subtotal>
                    <Subtotal>
                        <p>Delivery</p>
                        <p>free</p>
                    </Subtotal>
                    <Link to="/">
                        <CheckoutButton
                            onClick={() => checkout()}>
                            Checkout
                        </CheckoutButton>
                    </Link>
                </Border>
            </Right>
        </CartContainer>
    )
}

const CartContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    flex-basis: 70%;
    background-color: white;
`

const Right = styled.div`
    flex-basis: 30%;
    background-color: white;
`

const Border = styled.div`
    border-width: 1.3em;
    border-style: solid;
    border-color: #EBEBEB;
    padding: 2em;
`

const Title = styled.div`
    border-bottom: 0.06em solid #EBEBEB;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
`

const List = styled.ul`
    list-style-type: none;
`

const Total = styled.h2`
    border-bottom: 0.06em solid #EBEBEB;
`
const Subtotal = styled.div`
    display: flex;
    justify-content: space-between;
`

const CheckoutButton = styled.button`
    background: white;
    text-transform: uppercase;
    font-size: 1.15em;
    padding: 0.5em 1.25em;
    margin-top: 2em;
    width: 100%;
    border: 1px solid;
    font-family: 'Playfair Display', serif;

:active {
    background: black;
    color: white;
}
`

Cart.propTypes = {
    removeItem: PropTypes.func.isRequired,
    checkout: PropTypes.func.isRequired
}

export default Cart;
