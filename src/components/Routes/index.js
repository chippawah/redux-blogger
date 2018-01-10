import React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter as Router } from 'react-router-redux';
import { Container } from 'semantic-ui-react';

import { history } from '../../store';

// Scenes
import PostsList from '../../containers/PostsList';
import AddPostForm from '../../containers/AddPostForm';
import Post from '../../containers/Post';
// Nav
import Nav from '../../containers/Nav';

function Routes() {
  return (
    <Router history={history}>
      <div>
        <Nav />
        <Container>
          <Route exact path="/" component={PostsList} />
          <Route path="/posts/:id" component={Post} />
          <Route exact path="/add-post" component={AddPostForm} />
        </Container>
      </div>
    </Router>
  );
}


export default Routes;
