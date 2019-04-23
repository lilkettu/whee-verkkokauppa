import React from "react"
import PropTypes from "prop-types"

const CartHeader = ({ cart }) => {
    const items = Object.values(cart).reduce((total, quantity) => total + quantity, 0);
    
    return (
        <p>{items} items in cart</p>
    )
}

CartHeader.propTypes = {
    cart: PropTypes.object
}

export default CartHeader;