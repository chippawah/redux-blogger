// Nav
import _ from 'lodash'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { dismiss_error } from '../../actions/ui.actions';

class Nav extends Component {
  render(){
    return (
      <div>
        <Menu>
          <Menu.Item as={Link} to='/'>
              See All Posts
          </Menu.Item>
          <Menu.Item as={Link} to='/add-post'>
              Add A New Post
          </Menu.Item>
        </Menu>
        { _.isEmpty(this.props.ui.error) ? null :
          <Message
            negative
            onDismiss={ this.props.dismiss_error }
            header='API Error!'
            content={ this.props.ui.error.message } /> }
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  const { ui } = state;
  return { ui };
};

const connected = connect(mapStateToProps, { dismiss_error })(Nav);

export default connected
