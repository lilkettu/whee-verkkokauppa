import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

const Cart = ({ addedProducts }) => {
    return (
        <Section>
            <p>{addedProducts} items in cart</p>
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
    addedProducts: PropTypes.number.isRequired
}

export default Cart;