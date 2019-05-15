import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../common/Button'

const Product = ({id, name, description, price, image, addItem}) => {
	const imagePath = `/images/${image}`

	return (
		<ProductContainer>
			<Img src={imagePath} />
			<Center>
				<Name>{name}</Name>
				<p>{description}</p>
			</Center>
			<Right>
				<Price>{price} €</Price>
				<AddButton
					onClick={() => addItem(id)}>
					Add to cart
                </AddButton>
			</Right>
		</ProductContainer>
	)
}

Product.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	image: PropTypes.string,
	addItem: PropTypes.func.isRequired
}

const ProductContainer = styled.article`
    font-size: 1rem;
    display: flex;
    align-items: flex-end;
    padding-bottom: 2.5em;
    padding-top: 1.8em;
`

const Center = styled.div`
    padding-left: 2em;
    padding-right: 1.5em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
`

const Name = styled.p`
    font-size: 1.6em;
    font-weight: bold;
    font-style: italic;
    margin: 0.5em 0;
`

const Right = styled.div`
    align-items: flex-start;
`

const Img = styled.img`
    height: 7rem;
    width: auto;
`

const Price = styled.p`
    font-size: 1.6em;
    display: flex;
    justify-content: flex-end;
    margin-top: 0;
`

const AddButton = styled(Button)`
	padding: 0.4em 1.2em;
	margin-bottom: 0.4em;
`

export default Product