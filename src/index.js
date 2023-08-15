import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header/header';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('header'));
root.render(
  <React.StrictMode>
    <Header />
    <img className='image-1'></img>
    <img className='image-2'></img>
  </React.StrictMode>
);

reportWebVitals();