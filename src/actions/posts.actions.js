import axios from 'axios';
import { reset } from 'redux-form';
import { push } from 'react-router-redux';

import { apiError } from './ui.actions';

export const SELECT_POST = 'SELECT_POST';
export function selectPost(id) {
  return (dispatch) => {
    dispatch({
      type: SELECT_POST,
      payload: id,
    });
    dispatch(push(`/posts/${id}`));
  };
}

// ADD actions
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export function addPostSuccess({ data }) {
  return {
    type: ADD_POST_SUCCESS,
    payload: data,
  };
}

export const ADD_POST = 'ADD_POST';
export function addPost(newPost, cb) {
  return (dispatch) => {
    const type = ADD_POST;
    dispatch({ type });
    const request = axios.post('/api/posts', newPost);
    request.then((res) => {
      dispatch(addPostSuccess(res));
      dispatch(reset('addPostForm'));
      cb();
    });
    request.catch((error) => {
      const message = 'Whoops, the post could not be added...';
      dispatch(apiError({ message, type, error }));
    });
  };
}

// FETCH actions
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export function fetchPostSuccess({ data }) {
  return {
    type: FETCH_POST_SUCCESS,
    payload: data,
  };
}

export const FETCH_POST = 'FETCH_POST';
export function fetchPost(id) {
  return (dispatch) => {
    const type = FETCH_POST;
    dispatch({ type });
    const request = axios.get(`/api/posts/${id}`);
    request.then((res) => { dispatch(fetchPostSuccess(res)); });
    request.catch((error) => {
      const message = 'Uh oh! Something went wrong fetching the post...';
      dispatch(apiError({ message, type, error }));
    });
  };
}

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export function fetchPostsSuccess({ data }) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: data,
  };
}

export const FETCH_POSTS = 'FETCH_POSTS';
export function fetchPosts() {
  return (dispatch) => {
    const type = FETCH_POSTS;
    dispatch({ type });
    const request = axios.get('/api/posts');
    request.then((res) => { dispatch(fetchPostsSuccess(res)); });
    request.catch((error) => {
      const message = 'Uh oh! Something went wrong fetching the posts...';
      dispatch(apiError({ message, type, error }));
    });
  };
}
