import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

const Cart = ({ itemsInCart }) => {
    return (
        <Section>
            <p>{itemsInCart} items in cart</p>
        </Section>
    )
}

const Section = styled.div`
    display: inline
    padding: 50px 50px 0px 0px
    float: right
    font-family: 'Playfair Display', serif;
`

Cart.propTypes = {
    itemsInCart: PropTypes.number.isRequired
}

export default Cart;