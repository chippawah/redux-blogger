// PostsList
import _ from 'lodash';
import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  List,
  Divider } from 'semantic-ui-react';

import { fetchPosts } from '../../actions/posts.actions';

const renderList = (posts) => {
  const elements = [];
  if (posts.length > 0) {
    _.map(posts, (post) => {
      const element = (
        <List.Item key={post.id}>
          <Header>{ post.title }</Header>
          <p>{ post.content }</p>
          <Divider />
        </List.Item>
      );
      elements.push(element);
    });
  }
  return <List>{elements}</List>;
};

class PostsList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <Container>
        <h1>Blog Posts</h1>
        { renderList(this.props.posts) }
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { posts: { entities } } = state;
  const posts = entities ? Object.values(entities) : [];
  return { posts };
};

const connected = connect(mapStateToProps, { fetchPosts })(PostsList);

PostsList.propTypes = {
  fetchPosts: Proptypes.func.isRequired,
  posts: Proptypes.arrayOf(Proptypes.object).isRequired,
};

export default connected;
