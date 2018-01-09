// PostsList
import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container,
  List,
  Divider,
} from 'semantic-ui-react';

import { fetchPosts } from '../../actions/posts.actions';

class PostsList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  selectPost(id) {
    this.props.history.push({
      pathname: `/posts/${id}`,
    });
  }
  renderList(posts) {
    const elements = [];
    if (posts.length > 0) {
      _.map(posts, (post) => {
        const element = (
          <List.Item
            key={post.id}
            onClick={() => { this.selectPost(post.id); }}
          >
            <List.Content>
              <List.Header>{ post.title }</List.Header>
              <List.Description>{ post.content }</List.Description>
              <Divider hidden />
            </List.Content>
          </List.Item>
        );
        elements.push(element);
      });
    }
    return (
      <List selection link>
        {elements}
      </List>
    );
  }
  render() {
    return (
      <Container>
        <h1>Blog Posts</h1>
        { this.renderList(this.props.posts) }
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
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connected;
