import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const CartItem = ({product, quantity, removeItem}) => {
  const imageUrl = `/images/${product.image}`

  return (
    quantity > 0 ?
      <ItemContainer>
        <Img src={imageUrl} />
        <Center>
          <h3>{product.name}</h3>
          <RemoveButton
            onClick={() => removeItem(product.id)}>
            Remove item
        </RemoveButton>
        </Center>
        <div>
          <ItemInfo>Qty {quantity}</ItemInfo>
          <ItemInfo>{product.price} €</ItemInfo>
        </div>
      </ItemContainer>
      : <></>
  )
}

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 1.5em;
  padding-left: 0em;
`
const Img = styled.img`
  height: 5rem;
  width: 5rem;
  border: 1px solid #EBEBEB;
  padding: 0.5em 0.2em;
`
const Center = styled.div`
  flex-basis: 80%;
  padding-left: 1em;
`
const ItemInfo = styled.p`
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
