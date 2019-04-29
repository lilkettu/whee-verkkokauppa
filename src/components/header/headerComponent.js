import React from "react"
import styled from 'styled-components'
import {Link} from "react-router-dom"
import ShoppingCart from '../../svgsrc/shopping-cart.svg'

const HeaderComponent = ({cart}) => {
  const itemCount = Object.values(cart).reduce((total, quantity) => total + quantity, 0)

  return (
    <Header>
      <StyledLink to="/">
        <Title>whee</Title>
        <Subtitle>The most definitive shape store in the world</Subtitle>
      </StyledLink>

      <StyledLink to="/cart">
        {itemCount.length === 1 ?
          <p>1 item in cart</p> :
          <p>{itemCount} items in cart</p>}
        <CartIcon />
      </StyledLink>
    </Header>
  )
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 25rem;
  align-items: center;
  background-color: ${props => props.theme.lightGrey};
  background-image: linear-gradient(${props => props.theme.darkGrey}, ${props => props.theme.lightGrey});
`

const Title = styled.h1`
  font-size: 3.5em;
  padding-right: 1.8em;
  font-family: 'Pacifico', cursive;
  margin-top: 0.4em;
  margin-bottom: 0.6em;
`

const Subtitle = styled.p`
  font-family: 'Pacifico', cursive;
  font-size: 1.7em;
`

const CartIcon = styled(ShoppingCart)`
  width: 2.5em;
  fill: ${props => props.theme.black};
  padding: 1em;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: ${props => props.theme.black}; 
}
`

export default HeaderComponent;