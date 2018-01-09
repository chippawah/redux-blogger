// AddPost
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Message } from 'semantic-ui-react';

import { addPost } from '../../actions/posts.actions';

class AddPost extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  render_text_input(field){
    const {meta: {error, touched}} = field;
    let error_visible = error && touched;
    return (
      <div>
        <Form.Input
          className={ error && touched ? 'error' : ''}
          type='text'
          { ...field.input }
        />
        {error_visible ? (<Message negative content={touched ? error : ''} />) : null}
      </div>
    );
  }
  renderTextArea(field){
    const {meta: {error, touched}} = field;
    let error_visible = error && touched;
    return (
      <div>
        <Form.TextArea
          className={ error && touched ? 'error' : ''}
          { ...field.input }
        />
        {error_visible ? (<Message negative content={touched ? error : ''} />) : null}
      </div>
    );
  }
  onSubmit(post) {
    this.props.addPost(post);
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h1>New Post Form</h1>
        <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Form.Field>
            <label>Title</label>
            <Field
            name='title'
            component={this.render_text_input}/>
          </Form.Field>
          <Form.Field>
            <label>Tags</label>
            <Field
            name='tags'
            component={this.render_text_input}/>
          </Form.Field>
          <Form.Field>
            <label>Content</label>
            <Field
            name='content'
            component={this.renderTextArea}/>
          </Form.Field>
          <Form.Button as={ Button } className='ui primary' type='submit'>
            Submit Post
          </Form.Button>
          <Button negative as={ Link } to='/'>Cancel</Button>
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

const connected = connect(null, { addPost })(AddPost);
const form = reduxForm({ validate, form: 'addPost_form' })(connected);
export default form;
