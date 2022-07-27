import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 
import {store} from './store';
import { Provider } from 'react-redux'; 
import { ToastContainer } from 'react-toastify'; 
import Account from './Account'
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

