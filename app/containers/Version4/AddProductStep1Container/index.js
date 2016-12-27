/*
 *
 * AddProductStep1Container
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import AddProductStep1Component from '../../../components/Version4/AddProductStep1Component';

export class AddProductStep1Container extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AddProductStep1Component
        showList={this.props.showList}
        addToList={this.props.addToList}
        showStep2={this.props.showStep2}
        goBackStep1={this.props.goBackStep1}
      />
    );
  }
}

AddProductStep1Container.propTypes = {
  addToList: PropTypes.func.isRequired,
  goBackStep1: PropTypes.func.isRequired,
  showList: PropTypes.bool.isRequired,
  showStep2: PropTypes.bool.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(AddProductStep1Container);
