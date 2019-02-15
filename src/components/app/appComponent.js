import React, { Component } from "react";
import HelloWorld from '../hello/helloContainer';
import Product from '../product/productContainer';

class App extends Component {
  render() {
    return (
      <div>
        <h1>whee</h1>
        <Product />
      </div>
    );
  }
}

export default App;