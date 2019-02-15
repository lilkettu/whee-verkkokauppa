import React, { Component } from "react";
import Product from '../product/productContainer';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div>
        <Title>whee</Title>
        <Product />
      </div>
    );
  }
}

const Title = styled.h1`
  padding: 0px 20px
  font-size: 3em
  font-family: 'Pacifico', cursive
`;

export default App;