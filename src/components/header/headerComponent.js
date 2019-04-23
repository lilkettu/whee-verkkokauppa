import React from "react"
import styled from 'styled-components'
import {Link} from "react-router-dom"
import ShoppingCart from '../../svgsrc/shopping-cart.svg'

function HeaderComponent() {
  return (
    <Header>
      <Title>
        <StyledLink to="/">whee</StyledLink>
      </Title>
      <Subtitle>The most definitive shape store in the world</Subtitle>
      <div>
        <StyledLink to="/cart">
          <p>items in cart</p>
          <CartIcon />
        </StyledLink>
      </div>
    </Header>
  )
}

const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #EBEBEB;
  background-image: linear-gradient(#D7D7D7, #EBEBEB)
`

const Title = styled.h1`
  font-size: 3.5em;
  font-family: 'Pacifico', cursive;
`

const Subtitle = styled.h2`
  font-family: 'Pacifico', cursive;
`

const CartIcon = styled(ShoppingCart)`
  width: 2.5em;
  fill: black;
  padding: 1em;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}
`

export default HeaderComponent;