import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function CartItem({product, quantity, setQuantity, removeItem}) {
  const imagePath = `/images/${product.image}`

  const [removed, setRemoved] = useState(false)

  const handleQuantityChange = event => setQuantity(product.id, parseInt(event.target.value))

  const handleRemove = () => {
    removeItem(product.id)
    setRemoved(true)

    setTimeout(() => {
      setRemoved(false)
    }, 1500)
  }

  return (
    quantity > 0 ?
      <ItemContainer>

        <Img src={imagePath} />

        <Center>
          <h3>{product.name}</h3>
          <RemoveButton onClick={handleRemove}>
            Remove item
          </RemoveButton>
        </Center>

        <Right>
          <Quantity value={quantity} onChange={handleQuantityChange}>
            {Array.from({length: 10}, (_, i) => i + 1)
              .map(i => <option key={i} value={i}>{i}</option>)}
          </Quantity>

          <ItemInfo>{product.price} €</ItemInfo>
        </Right>

      </ItemContainer>
      :
      removed ?
        <Removed>Item removed</Removed> :
        <></>
  )
}

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired
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

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Quantity = styled.select`
  width: 4em;
  height: 2em;
`

const ItemInfo = styled.p`
  display: flex;
  justify-content: flex-end;
  white-space: nowrap;
  margin-bottom: 0;
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

export default CartItem
