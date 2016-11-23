/*
 *
 * SidebarContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import SidebarComponent from '../../components/SidebarComponent';

export class SidebarContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SidebarComponent />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(SidebarContainer);
