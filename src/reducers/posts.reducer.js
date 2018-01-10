import _ from 'lodash';
import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  ADD_POST,
  ADD_POST_SUCCESS,
  SELECT_POST,
  FETCH_POST,
  FETCH_POST_SUCCESS,
} from '../actions/posts.actions';

export default function (state = {}, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case SELECT_POST:
      return {
        ...state,
        selectedPost: payload,
      };
    case ADD_POST:
      return {
        ...state,
        posting: true,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        posting: false,
      };
    case FETCH_POSTS:
      return { ...state, fetching: true };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        fetching: false,
        entities: _.keyBy(payload, 'id'),
      };
    case FETCH_POST:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        fetching: false,
        entities: _.set({ ...state.entities }, payload.id, payload),
        selectedPost: payload.id,
      };
    default:
      return state;
  }
}
