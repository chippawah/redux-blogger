import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Scenes
import PostsList from '../../containers/PostsList';
import AddPostForm from '../../containers/AddPostForm';
// Nav
import Nav from '../../containers/Nav';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Route exact path='/' component={PostsList} />
          <Route exact path='/add-post' component={AddPostForm} />
        </div>
      </BrowserRouter>
    );
  }
}
export default Routes
