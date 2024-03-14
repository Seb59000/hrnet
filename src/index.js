import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.css';
import Router from './components/Router/Router';
import { Provider } from 'react-redux'
import { store } from './services/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
