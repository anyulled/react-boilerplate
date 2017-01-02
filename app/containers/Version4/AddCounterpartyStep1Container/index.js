/*
 *
 * AddCounterpartyStep1Container
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import AddCounterpartyStep1Component from '../../../components/Version4/AddCounterpartyStep1Component';

export class AddCounterpartyStep1Container extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AddCounterpartyStep1Component
        searchItems={this.props.searchItems}
        showItems={this.props.showItems}
        viewCounterparty={this.props.viewCounterparty}
        counterpartyDetail={this.props.counterpartyDetail}
        notFound={this.props.notFound}
        expand={this.props.expand}
        expandDetails={this.props.expandDetails}
        goBackStep1={this.props.goBackStep1}
        showSelectedProducts={this.props.showSelectedProducts}
        selectedProducts={this.props.selectedProducts}
        showStep2={this.props.showStep2}
      />
    );
  }
}

AddCounterpartyStep1Container.propTypes = {
  counterpartyDetail: PropTypes.bool.isRequired,
  expand: PropTypes.bool,
  expandDetails: PropTypes.func,
  goBackStep1: PropTypes.func.isRequired,
  notFound: PropTypes.bool.isRequired,
  searchItems: PropTypes.func,
  selectedProducts: PropTypes.bool.isRequired,
  showItems: PropTypes.bool,
  showSelectedProducts: PropTypes.func.isRequired,
  showStep2: PropTypes.bool.isRequired,
  viewCounterparty: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(AddCounterpartyStep1Container);
