// AddPost
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Message, Label } from 'semantic-ui-react';

import { addPost } from '../../actions/posts.actions';

const renderTextInput = (field) => {
  const { meta: { error, touched } } = field;
  const errorVisible = error && touched;
  return (
    <div>
      <Form.Input
        className={error && touched ? 'error' : ''}
        type="text"
        {...field.input}
      />
      {errorVisible ? (<Message negative content={touched ? error : ''} />) : null}
    </div>
  );
};
const renderTextArea = (field) => {
  const { meta: { error, touched } } = field;
  const errorVisible = error && touched;
  return (
    <div>
      <Form.TextArea
        className={error && touched ? 'error' : ''}
        {...field.input}
      />
      {errorVisible ? (<Message negative content={touched ? error : ''} />) : null}
    </div>
  );
};

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(post) {
    return this.props.addPost(post, () => {
      this.props.history.push({ pathname: '/' });
    });
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h1>New Post Form</h1>
        <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Form.Field>
            <Label pointing="below">Title</Label>
            <Field
              name="title"
              component={renderTextInput}
            />
          </Form.Field>
          <Form.Field>
            <Label pointing="below">Tags</Label>
            <Field
              name="tags"
              component={renderTextInput}
            />
          </Form.Field>
          <Form.Field>
            <Label pointing="below">Content</Label>
            <Field
              name="content"
              component={renderTextArea}
            />
          </Form.Field>
          <Form.Button as={Button} className="ui primary" type="submit">
            Submit Post
          </Form.Button>
          <Button
            negative
            as={Link}
            to="/"
          >
            Cancel
          </Button>
        </Form>
      </div>
    );
  }
}

const validate = ({ title, content }) => {
  const errors = {};
  if (!title) {
    errors.title = 'Please enter a value for the post title';
  }
  if (title && title.length < 3) {
    errors.title = 'Please enter at least three characters';
  }
  if (!content) {
    errors.content = 'Please enter a value for the post content';
  }
  if (content && content.length < 3) {
    errors.content = 'Please enter at least 3 characters';
  }
  return errors;
};

AddPost.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  addPost: PropTypes.func.isRequired,
};

const connected = connect(null, { addPost })(AddPost);
const form = reduxForm({ validate, form: 'addPostForm' })(connected);
export default form;
