import ReactDOM from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import { App } from 'App';
import { store } from 'redux/store';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
