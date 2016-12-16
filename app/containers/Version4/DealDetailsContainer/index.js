/*
 *
 * DealDetailsContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import DealDetailsComponent from '../../../components/Version4/DealDetailsComponent';

export class DealDetailsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <DealDetailsComponent />
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(DealDetailsContainer);
