import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import postsReducer from './posts.reducer';
import uiReducer from './ui.reducer';


const rootReducer = combineReducers({
  ui: uiReducer,
  posts: postsReducer,
  form: formReducer,
  router: routerReducer,
});

export default rootReducer;
