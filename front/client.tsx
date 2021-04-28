import React from 'react';
import { render } from 'react-dom';
import App from '@layouts/App';
import { BrowserRouter } from 'react-router-dom';
import store from './stores/store';

// if (process.env.NODE_ENV === 'development') {
//   const { worker } = require('./mock/server');
//   worker.start();
// }

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.querySelector('#app'),
);
