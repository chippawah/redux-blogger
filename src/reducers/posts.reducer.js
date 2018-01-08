import _ from 'lodash'
import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  ADD_POST,
  ADD_POST_SUCCESS
} from '../actions/posts.actions';

export default function (state = {}, action = {}) {
  const { type, payload} = action;
  switch(type) {
    case ADD_POST:
      return {
        ...state,
        posting: true
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        posting: false
      };
    case FETCH_POSTS:
      return { ...state, fetching: true };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        fetching: false,
        posts: _.map(payload.data, 'id')
      };
    default:
      return state;
  }
};
