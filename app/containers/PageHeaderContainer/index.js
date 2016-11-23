/*
 *
 * PageHeaderContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import PageHeaderComponent from '../../components/PageHeaderComponent';

export class PageHeaderContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <PageHeaderComponent {...this.props} />
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(PageHeaderContainer);
