/*
 *
 * AddCurrenciesContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import AddCurrenciesComponent from '../../../components/Version4/AddCurrenciesComponent';

export class AddCurrenciesContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      showStep2: false,
      showCurrencies: false,
      commonCurrencies: [
        { id: '€ - EUR', description: '' },
        { id: '$ - USD', description: '' },
        { id: '₤ - GBP', description: '' },
      ],
      currencies: [
        { id: 'Abkhazia - ₽ - RUB', description: ' - Russian ruble' },
        { id: 'Afghanistan - AFN', description: ' - Afghan afghani' },
        { id: 'Albania - ALL', description: ' - Albanian lek' },
        { id: 'Algeria - DZD', description: ' - Algerian dinar' },
        { id: 'Angola - AOA', description: ' - Angolan kwanza' },
        { id: 'Anguilla - $ - XCD', description: ' - East Caribbean dollar' },
        { id: 'Argentina - $ - ARS', description: ' - Argentine peso' },
        { id: 'Armenia - AMD', description: ' - Armenian dram' },
        { id: 'Aruba - AWG', description: ' - Aruban florin' },
      ],
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
        commonCurrencies={this.state.commonCurrencies}
        currencies={this.state.currencies}
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
