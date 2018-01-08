// PostsList
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetch_posts } from '../../actions/posts.actions'

class PostsList extends Component {

  render(){
    return (
      <h1>This is the post list page!</h1>
    );
  };

};

const connected = connect(null, { fetch_posts })(PostsList);

export default connected
