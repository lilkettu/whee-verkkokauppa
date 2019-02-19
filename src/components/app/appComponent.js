import React from "react"
import Products from '../product/productContainer'
import Cart from '../cart/cartContainer'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../../theme'

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
          <Cart />
        </Header>

        <Page>
          <Products />
        </Page>
      </React.Fragment>
    </ThemeProvider>
  )
}

const Header = styled.div`
      display: inline
`

const Title = styled.h1`
      padding: 0px 20px
      font-size: 3em
      float: left
      font-family: 'Pacifico', cursive
`

const Page = styled.div`
  padding: 150px 10%
`

export default App