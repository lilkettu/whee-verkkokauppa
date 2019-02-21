import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../../theme'
import Products from '../product/productContainer'
import Cart from '../cart/cartContainer'

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
          <Title>whee</Title>
          <a>Cart</a>
        </Header>

        <div>
          <Products />
          <Cart />
        </div>
      </React.Fragment>
    </ThemeProvider>
  )
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const Title = styled.h1`
  padding: 0em 1em;
  font-size: 3em;
  font-family: 'Pacifico', cursive;
`

export default App