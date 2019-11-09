/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
//import { updateWindowSize } from './Redux/actions/windowSizeAction.js'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import LandingIndex from './Components/Landing/LandingIndex.js'
import Header from './Components/Header/Header.js';
import debounce from 'lodash.debounce';
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Cart from './Components/Cart/Cart.js'
import Products from './Components/Products/Products.js'
import Product from './Components/Products/Product.js'



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isCartOpen: false,
      checkout: { lineItems: [] },
      products: [],
      shop: {}
    };

    this.handleCartClose = this.handleCartClose.bind(this);
    this.addVariantToCart = this.addVariantToCart.bind(this);
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
  }

  componentWillMount() {
    this.props.client.checkout.create().then((res) => {
      this.setState({
        checkout: res,
      });
    });

    this.props.client.product.fetchAll().then((res) => {
      this.setState({
        products: res,
      });
    });

    this.props.client.shop.fetchInfo().then((res) => {
      this.setState({
        shop: res,
      });
    });
  }

  addVariantToCart(variantId, quantity) {
    this.setState({
      isCartOpen: true,
    });

    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }]
    const checkoutId = this.state.checkout.id

    return this.props.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  updateQuantityInCart(lineItemId, quantity) {
    const checkoutId = this.state.checkout.id
    const lineItemsToUpdate = [{ id: lineItemId, quantity: parseInt(quantity, 10) }]

    return this.props.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  removeLineItemInCart(lineItemId) {
    const checkoutId = this.state.checkout.id

    return this.props.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  handleCartClose() {
    this.setState({
      isCartOpen: false,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <header className="App__header">
          {!this.state.isCartOpen &&
            <div className="App__view-cart-wrapper">
              <button className="App__view-cart" onClick={() => this.setState({ isCartOpen: true })}>Cart</button>
            </div>
          }
          <div className="App__title">
            <h1>{this.state.shop.name}: React Example</h1>
            <h2>{this.state.shop.description}</h2>
          </div>
        </header>
        <Products
          products={this.state.products}
          client={this.props.client}
          addVariantToCart={this.addVariantToCart}
        />
        <Cart
          client={this.props.client}
          checkout={this.state.checkout}
          isCartOpen={this.state.isCartOpen}
          handleCartClose={this.handleCartClose}
          updateQuantityInCart={this.updateQuantityInCart}
          removeLineItemInCart={this.removeLineItemInCart}
        />
      </div>
    );
  }
}

export default App;