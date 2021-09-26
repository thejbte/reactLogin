import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

//aca se renderiza todo App
//https://es.reactjs.org/docs/strict-mode.html
//destacar problemas potenciales
ReactDOM.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);