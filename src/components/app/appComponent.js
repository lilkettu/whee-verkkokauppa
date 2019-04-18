import React from "react"
import {Route} from "react-router-dom"
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components'
import theme from '../../theme'
import Header from '../header/headerComponent'
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
        <Header />
        <Body>
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={Cart} />
        </Body>
      </React.Fragment>
    </ThemeProvider >
  )
}

const Body = styled.div`
  margin: 5em 5%;
`

export default App