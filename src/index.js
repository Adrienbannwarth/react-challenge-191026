import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configure } from './redux/store/configureStore';

import App from './components/App/App';

import './index.css';

const store = configure();
const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  target,
);
