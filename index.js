import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import MyProvider from './context/Provider';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <MyProvider>
      <App />
    </MyProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
serviceWorker.unregister();
