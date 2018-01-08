// AddPost
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, Message } from 'semantic-ui-react';

import { add_post } from '../../actions/posts.actions'

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
  render_text_area(field){
    const {meta: {error, touched}} = field;
    let error_visible = error && touched;
    return (
      <div>
        <Form.Input
          className={ error && touched ? 'error' : ''}
          as='textarea'
          { ...field.input }
        />
        {error_visible ? (<Message negative content={touched ? error : ''} />) : null}
      </div>
    );
  }
  onSubmit(new_post_data){
    this.props.add_post(new_post_data);
  }
  render(){
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
            component={this.render_text_area}/>
          </Form.Field>
          <Button className='ui primary' type='submit'>
            Submit Post
          </Button>
        </Form>
      </div>
    );
  };

};

const validate = function({ title }){
  const errors = {};
  if (!title) {
    errors['title'] = 'Please enter a value for the post title';
  }
  if (title && title.length < 3) {
    errors['title'] = 'Please enter at least three characters';
  }
  return errors;
};

const connected = connect(null, { add_post })(AddPost);
const form = reduxForm({ validate, form: 'add_post_form' })(connected);
export default form
