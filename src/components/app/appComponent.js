import React from "react"
import {Route} from "react-router-dom"
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components'
import theme from '../../theme'
import Header from '../header/headerContainer'
import Products from '../product/productContainer'
import Cart from '../cart/cartContainer'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Playfair Display', serif;
    color: ${props => props.theme.black};
    position: relative;
    min-height: 100vh;
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <Header />
        <Content>
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={Cart} />
        </Content>
        <Footer />
      </React.Fragment>
    </ThemeProvider >
  )
}

const Content = styled.div`
  padding-bottom: 7rem;
  margin: 3rem 20% 0 25%;
`

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5rem;
  background-color: ${props => props.theme.darkGrey};
`

export default App