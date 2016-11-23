/*
 *
 * BreadcrumbContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import BreadcrumbComponent from '../../components/BreadcrumbComponent';

export class BreadcrumbContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <BreadcrumbComponent />
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(BreadcrumbContainer);
