/*
 *
 * DealTabsContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import DealTabsComponent from '../../../components/Version4/DealTabsComponent';

export class DealTabsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <DealTabsComponent />
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(DealTabsContainer);
