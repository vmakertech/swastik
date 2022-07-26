import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Account from './Account';
import { store } from './store';
import { Provider } from 'react-redux';
import Posts from './Posts';
import { ToastContainer } from 'react-toastify';

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <Posts /> */}
      {/* <Account /> */}
      
      <ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				closeOnClick
			/>
    </Provider>
  </React.StrictMode>
);

