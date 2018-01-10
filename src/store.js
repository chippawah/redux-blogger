import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';

import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createHistory();
const historyMiddleware = routerMiddleware(history);
const middleware = applyMiddleware(
  logger,
  thunk,
  reduxPromise,
  historyMiddleware,
);
const enhancer = composeEnhancers(middleware);
export const store = createStore(reducers, enhancer);
