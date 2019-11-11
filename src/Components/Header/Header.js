import React from 'react'
import ReactDOM from 'react-dom'
import client from '../../index.js'
import Cart from '../Cart/Cart.js'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Navbar, Nav, Dropdown, NavDropdown, Form, FormControl, Button, Image } from 'react-bootstrap'


class Header extends React.Component {
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

    return <div className='message-box'>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Uniqlone</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Women</Nav.Link>
          <Nav.Link href="#features">Men</Nav.Link>
          <Nav.Link href="#pricing">Kids</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <NavDropdown title="Cart" id="basic-nav-dropdown">
            <Cart
              checkout={this.state.checkout}
              isCartOpen={this.state.isCartOpen}
              handleCartClose={this.handleCartClose}
              updateQuantityInCart={this.updateQuantityInCart}
              removeLineItemInCart={this.removeLineItemInCart}
            />
          </NavDropdown>
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
      <br></br>
    </div >
  }
}

export default Header;