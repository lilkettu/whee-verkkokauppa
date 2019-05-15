import React from 'react'
import PropTypes from 'prop-types'
import Product from './productComponent'
import styled from 'styled-components'

const ProductList = ({products, ...props}) =>
	<ul>
		{products.map(product => (
			<Item key={product.id}>
				<Product {...product} {...props} />
			</Item>
		))}
	</ul>

ProductList.propTypes = {
	products: PropTypes.array.isRequired,
	addItem: PropTypes.func.isRequired
}

const Item = styled.li`
    border-bottom: 0.06em solid ${props => props.theme.lightGrey};
    :last-of-type {
        border-bottom: 0;
    }
`

export default ProductList;