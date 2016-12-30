/*
 *
 * AddCounterpartyStep1Container
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import AddCounterpartyStep1Component from '../../../components/Version4/AddCounterpartyStep1Component';

export class AddCounterpartyStep1Container extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      showItems: false,
      counterpartyDetail: false,
      notFound: false,
      expand: false,
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

  render() {
    return (
      <AddCounterpartyStep1Component
        searchItems={(e) => this.searchItems(e)}
        showItems={this.state.showItems}
        viewCounterparty={this.viewCounterparty}
        counterpartyDetail={this.state.counterpartyDetail}
        notFound={this.state.notFound}
        expand={this.state.expand}
        expandDetails={this.expandDetails}
      />
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(AddCounterpartyStep1Container);
