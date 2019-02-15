import React from "react";
import PropTypes from "prop-types";
import Product from "./productComponent";

const ProductList = ({ products }) => {
    return (
        <ul>
            {products.map(product => (
                    <Product key={product.id} {...product} />
            ))}
        </ul>

    )
}

ProductList.propTypes = {
    products: PropTypes.array

};

export default ProductList;