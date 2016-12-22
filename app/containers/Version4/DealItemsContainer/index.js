/*
 *
 * DealItemsContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import DealItemsComponent from '../../../components/Version4/DealItemsComponent';

export class DealItemsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <DealItemsComponent />
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(DealItemsContainer);
