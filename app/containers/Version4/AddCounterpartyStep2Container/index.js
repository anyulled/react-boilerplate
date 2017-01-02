/*
 *
 * AddCounterpartyStep2Container
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import AddCounterpartyStep2Component from '../../../components/Version4/AddCounterpartyStep2Component';

export class AddCounterpartyStep2Container extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AddCounterpartyStep2Component showStep2={this.props.showStep2}/>
    );
  }
}

AddCounterpartyStep2Container.propTypes = {
  showStep2: PropTypes.bool.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(AddCounterpartyStep2Container);
