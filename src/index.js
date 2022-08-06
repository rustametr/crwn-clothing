import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import App from './App';
import { UserProvider } from './contexts/users.contexts'
import { ProductsProvider } from './contexts/products.contexts'
import { CartDropdownProvider } from './contexts/cart-dropdown.contexts'
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartDropdownProvider>
            <App />
          </CartDropdownProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
