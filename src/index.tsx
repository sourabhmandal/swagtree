import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeProvider from './context/ThemeContext';
import ActiveCartProvider from './context/ActiveCartContex';
import WishlistProvider from './context/WishlistContext';
import CatalogProvider from './context/CatalogContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <ActiveCartProvider>
        <WishlistProvider>
          <CatalogProvider>
            <App />
          </CatalogProvider>
        </WishlistProvider>
      </ActiveCartProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
