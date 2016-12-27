/*
 *
 * DealTabsContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import DealTabsComponent from '../../../components/Version4/DealTabsComponent';

export class DealTabsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <DealTabsComponent sublimit={this.props.sublimit} />
    );
  }
}

DealTabsContainer.propTypes = {
  sublimit: PropTypes.bool.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(DealTabsContainer);
