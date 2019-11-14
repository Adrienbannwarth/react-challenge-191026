import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import axiosMiddleware from 'redux-axios-middleware';
import rootReducer from '../reducers';
import { client, options } from '../../helpers/api';

// eslint-disable-next-line
const enhancers = [];
const middleware = [
  thunk,
  axiosMiddleware(client),
];

const createStoreWithMiddleware = compose(applyMiddleware(...middleware)(createStore));

export function configure(initialState) {
  const configStore = createStoreWithMiddleware(
    rootReducer,
    Object.assign({}, initialState),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return configStore;
}
