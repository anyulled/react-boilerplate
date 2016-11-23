/*
 *
 * MainDataContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import MainDataComponent from '../../components/MainDataComponent';

export class MainDataContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <MainDataComponent />
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(MainDataContainer);
