import React from "react"
import PropTypes from "prop-types"

const CartHeader = ({ itemsInCart }) => {
    const items = Object.values(itemsInCart).reduce((total, quantity) => total + quantity, 0);
    
    return (
        <p>{items} items in cart</p>
    )
}

CartHeader.propTypes = {
    itemsInCart: PropTypes.object
}

export default CartHeader;