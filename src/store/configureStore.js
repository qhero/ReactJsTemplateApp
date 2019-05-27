import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware  } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import createRootReducer from './reducers';

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

export const history = createBrowserHistory({ baseUrl: baseUrl });

const initialState = {}
const middleware = [
  thunk,
  routerMiddleware(history)
];
const enhancers = [];
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

export default function configureStore(preloadedState = initialState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware), ...enhancers)
  )

  return store;
}