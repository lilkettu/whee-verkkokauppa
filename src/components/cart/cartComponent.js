import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import CartItem from './cartItemComponent'
import {products} from '../../products.js'
import Button from '../common/Button'

const Cart = ({cart, checkout, ...props}) => {
	const listOfProducts = products.products

	const itemCount = Object.values(cart).reduce((total, quantity) => total + quantity, 0)

	const totalPrice = Object.values(cart)
		.map((item, i) => item * listOfProducts[i].price)
		.reduce((total, subtotal) => total + subtotal, 0)

	return (
		<CartContainer>

			<ShoppingCart>
				<Border>
					<Title>
						<h1>Shopping cart</h1>
						{itemCount === 1 ?
							<h2>1 item</h2> :
							<h2>{itemCount} items</h2>}
					</Title>
					<ul>
						{listOfProducts.map(product =>
							<li key={product.id}>
								<CartItem product={product} quantity={cart[product.id]} {...props} />
							</li>
						)}
					</ul>
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

Cart.propTypes = {
	cart: PropTypes.object.isRequired,
	setQuantity: PropTypes.func.isRequired,
	removeItem: PropTypes.func.isRequired,
	checkout: PropTypes.func.isRequired
}

const CartContainer = styled.div`
    display: flex;
    padding-top: 1rem;  
	flex-wrap: wrap;
	justify-content: space-between;
`

const ShoppingCart = styled.div`
	box-sizing: border-box;
    background-color: ${props => props.theme.white};
	flex: 1;
`

const Checkout = styled.div`
    width: 19em;
    background-color: ${props => props.theme.white};
    box-sizing: border-box;

    @media (max-width: 800px) {
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
	flex-flow: row wrap;
    align-items: baseline;
	justify-content: space-between;
`

const Total = styled.h2`
    border-bottom: 0.06em solid ${props => props.theme.lightGrey};
`

const Amount = styled.div`
    display: flex;
    justify-content: space-between;
`

const CheckoutButton = styled(Button)`
    padding: 0.5em 1.25em;
    margin-top: 2em;
    width: 100%;
}
`

export default Cart;
