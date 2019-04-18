import React from "react"
import styled from 'styled-components'
import {Link} from "react-router-dom"
import CartIcon from '../../svgsrc/shopping-cart.svg'

function HeaderComponent() {
  return (
    <Header>
      <Title><StyledLink to="/">whee</StyledLink></Title>
      <Subtitle>The most definitive shape store in the world</Subtitle>
      <StyledLink to="/cart">Items in cart<ShoppingCart /></StyledLink>
    </Header>
  )
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background-color: #EBEBEB;
  background-image: linear-gradient(#D7D7D7, #EBEBEB)
`

const Title = styled.h1`
  padding: 0em 1em;
  font-size: 4em;
  font-family: 'Pacifico', cursive;
`

const Subtitle = styled.h2`
  font-family: 'Pacifico', cursive;
`

const ShoppingCart = styled(CartIcon)`
  padding: 0em 4em;
  width: 3em;
  fill: black;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
  text-decoration: none;
  color: black;
}
`

export default HeaderComponent;