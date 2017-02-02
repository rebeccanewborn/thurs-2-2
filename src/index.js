import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import './index.css';

const defaultState = {loading: false}

const reducer = (state= defaultState, action) => {
  switch(action.type) {
    case "ASYNC_START":
      // console.log('action', action);
      return {...state, loading: true}
    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
