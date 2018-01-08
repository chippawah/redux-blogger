import { combineReducers } from 'redux';
import PostsReducer from './posts.reducer';
import UIReducer from './ui.reducer';
import { reducer as form_reducer } from 'redux-form'

const rootReducer = combineReducers({
  ui: UIReducer,
  posts: PostsReducer,
  form: form_reducer
});

export default rootReducer;
