/*
 *
 * DealSwitchViewContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import DealSwitchViewComponent from '../../../components/Version4/DealSwitchViewComponent';

export class DealSwitchViewContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <DealSwitchViewComponent />
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(DealSwitchViewContainer);
