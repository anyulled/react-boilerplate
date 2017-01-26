/*
 *
 * AddCounterpartyContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import AddCounterpartyComponent from '../../../components/Version4/counterparty/AddCounterpartyComponent';

export class AddCounterpartyContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      showStep2: false,
      showItems: false,
      counterpartyDetail: false,
      notFound: false,
      expand: false,
      selectedProducts: false,
    };
  }

  searchItems(e) {
    if (e.target.value.length >= 3) {
      this.setState({
        showItems: true,
        notFound: false,
      });
    } else {
      this.setState({
        showItems: false,
        counterpartyDetail: false,
        notFound: true,
      });
    }
  }

  viewCounterparty = () => {
    this.setState({ counterpartyDetail: true });
  }

  expandDetails = () => {
    this.setState({ expand: !this.state.expand });
  }

  showSelectedProducts = () => {
    this.setState({
      selectedProducts: true,
      showItems: false,
      counterpartyDetail: false,
      notFound: false,
      expand: false,
    });
  }

  goToStep2 = () => {
    this.setState({
      showStep2: true,
      showItems: false,
      counterpartyDetail: false,
      notFound: false,
      expand: false,
      selectedProducts: false,
    });
  }

  goBackStep1 = () => {
    this.setState({
      showStep2: false,
      selectedProducts: true,
    });
  }

  render() {
    return (
      <AddCounterpartyComponent
        searchItems={(e) => this.searchItems(e)}
        showItems={this.state.showItems}
        viewCounterparty={this.viewCounterparty}
        counterpartyDetail={this.state.counterpartyDetail}
        notFound={this.state.notFound}
        expand={this.state.expand}
        expandDetails={this.expandDetails}
        goBackStep1={this.goBackStep1}
        goToStep2={this.goToStep2}
        showSelectedProducts={this.showSelectedProducts}
        selectedProducts={this.state.selectedProducts}
        showStep2={this.state.showStep2}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(AddCounterpartyContainer);
