/*
 *
 * AddProductContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import AddProductComponent from '../../../components/Version4/products/AddProductComponent';

export class AddProductContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      showList: false,
      showStep2: false,
    };
  }

  addToList = () => {
    this.setState({
      showList: true,
    });
  }

  goStep2 = () => {
    this.setState({
      showStep2: true,
    });
  }

  goBackStep1 = () => {
    this.setState({
      showStep2: false,
    });
  }

  render() {
    return (
      <AddProductComponent
        showList={this.state.showList}
        showStep2={this.state.showStep2}
        addToList={this.addToList}
        goStep2={this.goStep2}
        goBackStep1={this.goBackStep1}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(AddProductContainer);
