/*
 *
 * AddCollateralContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import AddCollateral from '../../../components/Version4/collateral/AddCollateral';

export class AddCollateralContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      showStep2: false,
      showList: false,
    };
  }

  addToList = () => {
    this.setState({
      showList: true,
    });
  }

  goBackStep1 = () => {
    this.setState({
      showStep2: false,
    });
  }

  goStep2 = () => {
    this.setState({
      showStep2: true,
    });
  }

  render() {
    return (
      <AddCollateral
        showStep2={this.state.showStep2}
        goBackStep1={this.goBackStep1}
        showList={this.state.showList}
        addToList={this.addToList}
        goStep2={this.goStep2}
      />
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(AddCollateralContainer);
