
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import debounce from 'lodash.debounce'
import Client from 'shopify-buy';
import reducers from './Redux/reducers';
import reduxThunk from 'redux-thunk';
import App from './App.js';

//app

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

const client = Client.buildClient({
  domain: 'sethjonesdemo.myshopify.com',
  storefrontAccessToken: 'd335641a719a0b35ab22706f0785e090',
});




ReactDOM.render(
  <Provider store={store}
  >
    <App client={client} />
  </Provider>,
  document.querySelector('#root')
)

export default client;