import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Link} from "react-router-dom"
import CartItem from './cartItemComponent'
import {products} from '../../products.js'

const Cart = ({cart, setQuantity, removeItem, checkout}) => {
    const productList = products.products;

    const itemCount = Object.values(cart).reduce((total, quantity) => total + quantity, 0)

    const totalPrice = (Object.values(cart)
        .map((item, i) => item * productList[i].price)
        .reduce((total, subtotal) => total + subtotal, 0))

    return (
        <CartContainer>
            <ShoppingCart>
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
                                <CartItem product={product} quantity={cart[product.id]} setQuantity={setQuantity} removeItem={removeItem} />
                            </li>
                        ))}
                    </List>
                </Border>
            </ShoppingCart>
            <Checkout>
                <Border>
                    <Total>Total</Total>
                    <Amount>
                        <p>Sub-total</p>
                        <p>{totalPrice} €</p>
                    </Amount>
                    <Amount>
                        <p>Delivery</p>
                        <p>free</p>
                    </Amount>
                    <Link to="/">
                        <CheckoutButton
                            onClick={() => checkout()}>
                            Checkout
                        </CheckoutButton>
                    </Link>
                </Border>
            </Checkout>
        </CartContainer>
    )
}

const CartContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 1rem;  
    flex-wrap: wrap;
`

const ShoppingCart = styled.div`
    min-width: 30em;
    background-color: ${props => props.theme.white};
    box-sizing: border-box;
    flex: 1;

    @media (max-width: 600px) {
        min-width: 25em;
    }
`

const Checkout = styled.div`
    width: 19em;
    background-color: ${props => props.theme.white};
    box-sizing: border-box;

    @media (max-width: 960px) {
        flex: 1;
    }
`

const Border = styled.div`
    border-width: 1.3em;
    border-style: solid;
    border-color: ${props => props.theme.lightGrey};
    padding: 2em;
    min-height: 16.6em;
`

const Title = styled.div`
    border-bottom: 0.06em solid ${props => props.theme.lightGrey};
    display: flex;
    align-items: baseline;
    justify-content: space-between;
`

const List = styled.ul`
    list-style-type: none;
    padding: 0;
`

const Total = styled.h2`
    border-bottom: 0.06em solid ${props => props.theme.lightGrey};
`
const Amount = styled.div`
    display: flex;
    justify-content: space-between;
`

const CheckoutButton = styled.button`
    background: ${props => props.theme.white};
    text-transform: uppercase;
    font-size: 1.15em;
    padding: 0.5em 1.25em;
    margin-top: 2em;
    width: 100%;
    border: 1px solid;
    font-family: 'Playfair Display', serif;

:active {
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
}
`

Cart.propTypes = {
    addItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
    checkout: PropTypes.func.isRequired
}

export default Cart;
