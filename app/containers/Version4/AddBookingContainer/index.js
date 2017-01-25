/*
 *
 * AddBookingContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import AddBookingComponent from '../../../components/Version4/AddBookingComponent';

export class AddBookingContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      showStep2: false,
      bookingEntity: false,
      bookingEntityDetail: false,
      selectedBookingEntity: false,
      notFound: false,
      accounts: false,
      facilities: false,
    };
  }

  showAccounts = () => {
    this.setState({ accounts: true });
  }

  showFacilities = () => {
    this.setState({ facilities: true });
  }

  searchItems(e) {
    if (e.target.value.length >= 3) {
      this.setState({
        bookingEntity: true,
        notFound: false,
        bookingEntityDetail: false,
      });
    } else {
      this.setState({
        bookingEntity: false,
        bookingEntityDetail: false,
        notFound: true,
      });
    }
  }

  viewBookingEntityDetail = () => {
    this.setState({
      bookingEntityDetail: true,
      notFound: false,
    });
  }

  addBookingEntity = () => {
    this.setState({
      selectedBookingEntity: true,
      accounts: false,
      facilities: false,
      bookingEntity: false,
      bookingEntityDetail: false,
      notFound: false,
    });
  }

  goToStep2 = () => {
    this.setState({
      showStep2: true,
      bookingEntity: false,
      bookingEntityDetail: false,
    });
  }

  goBackStep1 = () => {
    this.setState({
      showStep2: false,
    });
  }

  render() {
    return (
      <AddBookingComponent
        searchItems={(e) => this.searchItems(e)}
        showStep2={this.state.showStep2}
        bookingEntity={this.state.bookingEntity}
        accounts={this.state.accounts}
        facilities={this.state.facilities}
        bookingEntityDetail={this.state.bookingEntityDetail}
        selectedBookingEntity={this.state.selectedBookingEntity}
        viewBookingEntityDetail={this.viewBookingEntityDetail}
        goToStep2={this.goToStep2}
        goBackStep1={this.goBackStep1}
        addBookingEntity={this.addBookingEntity}
        notFound={this.state.notFound}
        showAccounts={this.showAccounts}
        showFacilities={this.showFacilities}
      />
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(AddBookingContainer);
