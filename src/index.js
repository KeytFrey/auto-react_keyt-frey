import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './components/app/index';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import tunk from 'redux-thunk'
import { reducers } from './store/reducers';


const store = createStore(reducers, applyMiddleware(tunk))

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
