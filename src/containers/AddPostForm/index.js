// AddPost
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { add_post } from '../../actions/posts.actions'

class AddPost extends Component {

  render(){
    return (
      <h1>This is the add post page!</h1>
    );
  };

};

const connected = connect(null, { add_post })(AddPost);

export default connected
