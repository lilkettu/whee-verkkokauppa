import React from "react"
import { Route, Link } from "react-router-dom"
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../../theme'
import Products from '../product/productContainer'
import Cart from '../cart/cartContainer'
import CartIcon from '../../svgsrc/shopping-cart.svg'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Playfair Display', serif;
    color: ${props => props.theme.black}
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <Header>
          <Title><Link to="/">whee</Link></Title>


            <ShoppingCart>
              <Link to="/cart">
                <CartIcon />
              </Link>
            </ShoppingCart>
        </Header>
        <Body>
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={Cart} />
        </Body>
      </React.Fragment>
    </ThemeProvider >
  )
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const ShoppingCart = styled.span`
  width: 2em;
  fill: #ebebeb;
`

const Title = styled.h1`
  padding: 0em 1em;
  font-family: 'Pacifico', cursive;
`

const Body = styled.div`
  padding: 5%;
`

export default App