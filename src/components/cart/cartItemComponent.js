import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

function CartItem({product, quantity, setQuantity, removeItem}) {
  const imageUrl = `/images/${product.image}`

  const [removed, setRemoved] = useState(false)

  const qtyList = Array.from({length: 10}, (_, i) => i + 1)

  useEffect(() => {
    if (removed) {
      setTimeout(() => {
        setRemoved(false)
      }, 1500)
    }
  })

  return (
    quantity > 0 ?
      <ItemContainer>
        <Img src={imageUrl} />
        
        <Center>
          <h3>{product.name}</h3>
          <RemoveButton
            onClick={() => {
              removeItem(product.id)
              setRemoved(true)
            }}>
            Remove item
          </RemoveButton>
        </Center>

        <div>
          <Quantity>
            <ItemInfo>Qty</ItemInfo>
            
            <Select value={quantity} onChange={event => setQuantity(product.id, parseInt(event.target.value))}>
              {qtyList.map((i => <option key={i} value={i}>{i}</option>))}
            </Select>
          </Quantity>

          <ItemInfo>{product.price} €</ItemInfo>
        </div>
      </ItemContainer>
      :
      quantity === 0 && removed ?
        <Removed>Item removed</Removed> :
        <></>
  )
}

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding-top: 1.5em;
  padding-bottom: 0.5em;
`
const Img = styled.img`
  height: 5rem;
  width: auto;
  border: 1px solid #EBEBEB;
  padding: 0.5em 0.2em;
`
const Center = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  padding-left: 1em;
`
const Quantity = styled.div`
  display: flex;
  align-items: center;
`
const Select = styled.select`
  margin-left: 0.5em;
`
const ItemInfo = styled.p`
  display: flex;
  justify-content: flex-end;
  white-space: nowrap;
  margin: 0.7em 0;
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
const Removed = styled.div`
  display: flex;
  align-items: center;
  height: 6.125em;
  padding-top: 1.5em;
  padding-bottom: 0.5em;
`

CartItem.propTypes = {
  product: PropTypes.object,
  quantity: PropTypes.number,
  addItem: PropTypes.func,
  removeItem: PropTypes.func
}

export default CartItem
