import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.css';
import Router from './components/Router/Router';
import { Provider } from 'react-redux'
import { store } from './services/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
