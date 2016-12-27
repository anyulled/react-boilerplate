/*
 *
 * AddProductStep2Container
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import AddProductStep2Component from '../../../components/Version4/AddProductStep2Component';

export class AddProductStep2Container extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AddProductStep2Component showStep2={this.props.showStep2} />
    );
  }
}

AddProductStep2Container.propTypes = {
  showStep2: PropTypes.bool.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(AddProductStep2Container);
