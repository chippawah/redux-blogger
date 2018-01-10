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

import { fetchPosts, selectPost } from '../../actions/posts.actions';

class PostsList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderList(posts) {
    const elements = [];
    if (posts.length > 0) {
      _.map(posts, (post) => {
        const element = (
          <List.Item
            key={post.id}
            onClick={() => { this.props.selectPost(post.id); }}
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

const connected = connect(mapStateToProps, { selectPost, fetchPosts })(PostsList);

PostsList.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  selectPost: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connected;
