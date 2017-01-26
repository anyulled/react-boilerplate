/*
 *
 * HeaderContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import HeaderComponent from '../../components/Version4/header/HeaderComponent';

export class HeaderContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HeaderComponent />
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(HeaderContainer);
