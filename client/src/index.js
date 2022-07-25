import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Account from './Account';
import { store } from './store';
import { Provider } from 'react-redux';
import Posts from './Posts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <Posts /> */}
      {/* <Account /> */}
    </Provider>
  </React.StrictMode>
);

