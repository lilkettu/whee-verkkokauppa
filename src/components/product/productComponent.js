import React from "react";
import PropTypes from "prop-types";

const Product = ({ name, price }) => {
    return (
        <li>
            {name} {price} €
        </li>
    )
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

export default Product;