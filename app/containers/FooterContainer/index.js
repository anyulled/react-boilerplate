/*
 *
 * FooterContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import FooterComponent from '../../components/FooterComponent';

export class FooterContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <FooterComponent />
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(FooterContainer);
