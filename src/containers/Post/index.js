// PostsList
import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container,
  Header,
} from 'semantic-ui-react';

import { fetchPost } from '../../actions/posts.actions';

class Post extends Component {
  componentDidMount() {
    if (_.isEmpty(this.props.post)) {
      const { match: { params: { id } } } = this.props;
      this.props.fetchPost(id);
    }
  }
  render() {
    const { post: { title, content } } = this.props;
    return (
      <Container>
        <Header as="h1">{title}</Header>
        <p>{ content }</p>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { posts: { entities = {}, selectedPost } } = state;
  const post = entities[selectedPost];
  return { post };
};

const connected = connect(mapStateToProps, { fetchPost })(Post);

Post.defaultProps = {
  post: {},
};

Post.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  post: PropTypes.shape({
    content: PropTypes.string,
    title: PropTypes.string,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default connected;
