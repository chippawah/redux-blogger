// Nav
import React, { Component } from 'react';
import { connect } from 'react-redux';


class Nav extends Component {

  render(){
    return (
      <h1>This is the navbar</h1>
    );
  };

};

const mapStateToProps = (state) => {
  const { ui } = state;
  return { ui };
};

const connected = connect(mapStateToProps, null)(Nav);

export default connected
