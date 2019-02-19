import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

const Cart = ({ itemsInCart }) => {
    return (
        <Section>
            <p>{itemsInCart.length} items in cart</p>
        </Section>
    )
}

const Section = styled.div`
    display: inline;
    padding: 50px 50px;
    float: right;
    font-family: 'Playfair Display', serif;
`

Cart.propTypes = {
    itemsInCart: PropTypes.array.isRequired
}

export default Cart;