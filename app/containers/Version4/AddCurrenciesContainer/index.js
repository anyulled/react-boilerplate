/*
 *
 * AddCurrenciesContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import AddCurrenciesComponent from '../../../components/Version4/limits/AddCurrenciesComponent';

export class AddCurrenciesContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      showStep2: false,
      showCurrencies: false,
    };
  }

  showSelectedCurrencies = () => {
    this.setState({ showCurrencies: true });
  }

  goBackStep1 = () => {
    this.setState({
      showStep2: false,
      showCurrencies: true,
    });
  }

  goToStep2 = () => {
    this.setState({
      showStep2: true,
      showCurrencies: false,
    });
  }

  render() {
    return (
      <AddCurrenciesComponent
        goBackStep1={this.goBackStep1}
        goToStep2={this.goToStep2}
        showStep2={this.state.showStep2}
        showCurrencies={this.state.showCurrencies}
        showSelectedCurrencies={this.showSelectedCurrencies}
      />
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(AddCurrenciesContainer);
