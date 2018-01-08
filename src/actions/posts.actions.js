import axios from 'axios';

// ADD actions
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export function add_post_success({ data }) {
  console.log('RESPONSE DATA', data);
  return {
    type: ADD_POST_SUCCESS,
    payload: data
  }
};

export const ADD_POST_ERROR = 'ADD_POST_ERROR';
export function add_post_error(error) {
  console.log('ERROR', error);
  return {
    type: ADD_POST_ERROR,
    payload: error
  }
};

export const ADD_POST = 'ADD_POST'
export function add_post(new_post) {
  return (dispatch) => {
    dispatch({ type: ADD_POST });
    const request = axios.post('/api/posts', new_post)
    request.then((res) => { dispatch(add_post_success(res)) });
    request.catch((error) => { dispatch(add_post_error(error)) });
  };
};

 // FETCH actions
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export function fetch_posts_success({ data }) {
  console.log('RESPONSE DATA', data);
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: data
  }
};

export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';
export function fetch_posts_error(error) {
  console.log('ERROR', error);
  return {
    type: FETCH_POSTS_ERROR,
    payload: error,
  }
};

export const FETCH_POSTS = 'FETCH_POSTS';
export function fetch_posts() {
  return (dispatch) => {
    dispatch({ type: FETCH_POSTS });
    const request = axios.get('/api/posts');
    request.then((res) => { dispatch(fetch_posts_success(res)) });
    request.catch((error) => { dispatch(fetch_posts_error(error)) });
  };
};
