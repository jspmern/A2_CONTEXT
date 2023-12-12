import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Product from './context/Product';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Product>
    <App />
    </Product>
  </React.StrictMode>
);


