/*
 *
 * ActivePageContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import ActivePageComponent from '../../components/ActivePageComponent';

export class ActivePageContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ActivePageComponent />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ActivePageContainer);
