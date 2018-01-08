import { combineReducers } from 'redux';
import PostsReducer from './posts.reducer';
import { reducer as form_reducer } from 'redux-form'

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: form_reducer
});

export default rootReducer;
