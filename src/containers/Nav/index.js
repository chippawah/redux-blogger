// Nav
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Nav extends Component {

  render(){
    return (
      <Menu>
        <Menu.Item as={Link} to='/'>
            See All Posts
        </Menu.Item>
        <Menu.Item as={Link} to='/add-post'>
            Add A New Post
        </Menu.Item>
      </Menu>
    );
  };

};

const mapStateToProps = (state) => {
  const { ui } = state;
  return { ui };
};

const connected = connect(mapStateToProps, null)(Nav);

export default connected
