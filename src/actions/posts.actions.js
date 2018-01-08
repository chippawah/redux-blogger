import axios from 'axios';

import { api_error } from './ui.actions';

// ADD actions
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export function add_post_success({ data }) {
  console.log('RESPONSE DATA', data);
  return {
    type: ADD_POST_SUCCESS,
    payload: data
  }
};

export const ADD_POST = 'ADD_POST'
export function add_post(new_post) {
  return (dispatch) => {
    const type = ADD_POST
    dispatch({ type });
    const request = axios.post('/api/posts', new_post)
    request.then((res) => { dispatch(add_post_success(res)) });
    request.catch((error) => {
      const message = 'Whoops, the post could not be added...';
      dispatch(api_error({ message, type, error }));
    });
  };
};

 // FETCH actions
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export function fetch_posts_success({ data }) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: data
  }
};

export const FETCH_POSTS = 'FETCH_POSTS';
export function fetch_posts() {
  return (dispatch) => {
    const type = FETCH_POSTS
    dispatch({ type });
    const request = axios.get('/api/posts');
    request.then((res) => { dispatch(fetch_posts_success(res)) });
    request.catch((error) => {
      dispatch(api_error({
        message: 'Uh oh! Something went wrong fetching the posts...',
        type,
        error
      }))
    });
  };
};
