import {
  createStore,
  applyMiddleware,
  compose } from 'redux';
import thunk from 'redux-thunk';
import redux_promise from 'redux-promise';
import logger from 'redux-logger';

import reducers from './reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(logger, thunk, redux_promise)
const enhancer = composeEnhancers(middleware);
const store = createStore(reducers, enhancer);
export default store
