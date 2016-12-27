/*
 *
 * AddProductContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import AddProductComponent from '../../../components/Version4/AddProductComponent';

export class AddProductContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AddProductComponent hideSidebar={this.props.hideSidebar} />
    );
  }
}

AddProductContainer.propTypes = {
  hideSidebar: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(AddProductContainer);
