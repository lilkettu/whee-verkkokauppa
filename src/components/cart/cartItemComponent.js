import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const CartItem = ({product, quantity, removeItem}) => {
    return (
      quantity > 0 ?
      <ItemContainer>
        <Image src={product.image}></Image>
        <Center>
          <h3>{product.name}</h3>
          <RemoveButton
            onClick={() => removeItem(product.id, product.price)}>
            Remove item
        </RemoveButton>
        </Center>
        <Right>
          <p>Qty {quantity}</p>
          <p>{product.price} €</p>
        </Right>
      </ItemContainer>
     : <></>
    )
}

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
`

const Image = styled.img`
  padding: 1em;
`
const Center = styled.div`
  justify-content: flex-start;
  flex-basis: 80%;
`
const Right = styled.div`
  justify-content: flex-end;
`
const RemoveButton = styled.button`
  background: white;
  text-transform: uppercase;
  border: 1px solid;
  padding: 0.3em 0.7em;
  font-family: 'Playfair Display', serif;
  
  :active {
      background: black;
      color: white;
  }
`
CartItem.propTypes = {
  product: PropTypes.object,
  quantity: PropTypes.number,
  removeItem: PropTypes.func
}

export default CartItem
