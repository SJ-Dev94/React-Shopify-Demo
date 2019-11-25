import Client from 'shopify-buy';

const client = Client.buildClient({
  storefrontAccessToken: 'your-access-token',
  domain: 'your-shopify-url.myshopify.com'
});

export default client;