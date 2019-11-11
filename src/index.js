
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import Client from 'shopify-buy';
import App from './App.js';




const client = Client.buildClient({
  domain: 'sethjonesdemo.myshopify.com',
  storefrontAccessToken: 'd335641a719a0b35ab22706f0785e090',
});



ReactDOM.render(
  <App client={client} />,
  document.querySelector('#root')
)

export default client;