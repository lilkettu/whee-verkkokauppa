import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const CartItem = ({product, quantity, removeItem}) => {
  const imageUrl = `/images/${product.image}`
  
  return (
    quantity > 0 ?
      <ItemContainer>
        <img src={imageUrl} height="70em" width="70em" />
        <Center>
          <h3>{product.name}</h3>
          <RemoveButton
            onClick={() => removeItem(product.id)}>
            Remove item
        </RemoveButton>
        </Center>
        <div>
          <Quantity>Qty {quantity}</Quantity>
          <p>{product.price} €</p>
        </div>
      </ItemContainer>
      : <></>
  )
}

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1.5em;
  padding-left: 0em;
`

const Center = styled.div`
  flex-basis: 75%;
`
const Quantity = styled.div`
  display: flex;
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
