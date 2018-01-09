// Nav
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Menu, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { dismissError } from '../../actions/ui.actions';

function Nav(props) {
  return (
    <div>
      <Menu inverted>
        <Menu.Item as={Link} to="/">
            See All Posts
        </Menu.Item>
        <Menu.Item as={Link} to="/add-post">
            Add A New Post
        </Menu.Item>
      </Menu>
      {
        _.isEmpty(props.error) ?
          null :
          <Message
            negative
            onDismiss={props.dismissError}
            header="API Error!"
            content={props.error.message}
          />
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  const { ui: { error } } = state;
  return { error };
};

Nav.propTypes = {
  error: PropTypes.shape({ message: PropTypes.string }).isRequired,
  dismissError: PropTypes.func.isRequired,
};

const connected = connect(mapStateToProps, { dismissError })(Nav);

export default connected;
