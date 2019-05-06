import React from "react"
import styled from 'styled-components'
import {Link} from "react-router-dom"
import ShoppingCart from '../../svgsrc/shopping-cart.svg'

const HeaderComponent = ({cart}) => {
  const itemCount = Object.values(cart).reduce((total, quantity) => total + quantity, 0)

  return (
    <Header>
      <Links>
        <Title>
          <StyledLink to="/">whee</StyledLink>
        </Title>
        <Subtitle>
          <StyledLink to="/">The most definitive shape store in the world</StyledLink>
        </Subtitle>
        <StyledLink to="/cart">
          {itemCount === 1 ?
            <p>1 item in cart</p> :
            <p>{itemCount} items in cart</p>}
          <CartIcon />
        </StyledLink>
      </Links>
    </Header>
  )
}

const Header = styled.div`
  background-color: ${props => props.theme.lightGrey};
  background-image: linear-gradient(${props => props.theme.darkGrey}, ${props => props.theme.lightGrey});
  padding: 1em 2em;
`

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;

  @media(max-width: 768px) {
   display: flex;
   justify-content: space-between;
  }
`

const Title = styled.h1`
  font-size: 3.5em;
  font-family: 'Pacifico', cursive;
  margin: 0;
  margin-bottom: 0.2em;
`

const Subtitle = styled.p`
  font-family: 'Pacifico', cursive;
  font-size: 1.7em;
  margin-left: 2em;
  margin-right: auto;

  @media (max-width: 960px) {
    font-size: 1.2em;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const CartIcon = styled(ShoppingCart)`
  width: 2.5em;
  fill: ${props => props.theme.black};
  padding-left: 1em;
`

const StyledLink = styled(Link)`
  display: flex;
  
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: ${props => props.theme.black}; 
}
`

export default HeaderComponent;