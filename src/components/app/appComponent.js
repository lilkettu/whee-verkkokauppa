import React, { Component } from "react"
import Products from '../product/productContainer'
import Cart from '../cart/cartContainer'
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <Title>whee</Title>
          <Cart />
        </Header>
        <Page>
          <Products />
        </Page>

      </div>
    )
  }
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
  font-family: 'Playfair Display', serif
`

export default App