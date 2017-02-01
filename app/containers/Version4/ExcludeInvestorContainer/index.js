/*
 *
 * ExcludeInvestorContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import ExcludeInvestor from '../../../components/Version4/derisking/ExcludeInvestor';

export class ExcludeInvestorContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      showItems: false,
      investorDetail: false,
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
        investorDetail: false,
        notFound: true,
      });
    }
  }

  render() {
    return (
      <ExcludeInvestor
        searchItems={(e) => this.searchItems(e)}
        showItems={this.state.showItems}
        investorDetail={this.state.counterpartyDetail}
        notFound={this.state.notFound}
        expand={this.state.expand}
        selectedProducts={this.state.selectedProducts}
      />
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ExcludeInvestorContainer);
