/*
 *
 * AddCounterpartyContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import AddCounterpartyComponent from '../../../components/Version4/AddCounterpartyComponent';

export class AddCounterpartyContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AddCounterpartyComponent
        hideSidebar={this.props.hideSidebar}
      />
    );
  }
}

AddCounterpartyContainer.propTypes = {
  hideSidebar: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(AddCounterpartyContainer);
