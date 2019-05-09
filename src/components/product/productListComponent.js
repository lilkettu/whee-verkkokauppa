import React from 'react'
import PropTypes from 'prop-types'
import Product from './productComponent'
import styled from 'styled-components'

const ProductList = ({products, ...props}) =>
	<List>
		{products.map(product => (
			<Item key={product.id}>
				<Product {...product} {...props} />
			</Item>
		))}
	</List>

ProductList.propTypes = {
	products: PropTypes.array.isRequired,
	addItem: PropTypes.func.isRequired
}

const List = styled.ul`
    list-style-type: none;
`
const Item = styled.li`
    border-bottom: 0.06em solid ${props => props.theme.lightGrey};
    :last-of-type {
        border-bottom: 0;
    }
`

export default ProductList;