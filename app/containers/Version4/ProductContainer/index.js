/*
 *
 * ProductContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import ProductComponent from '../../../components/Version4/ProductComponent';

export class ProductContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ProductComponent
        title={this.props.title}
        showSidebar={this.props.showSidebar}
      />
    );
  }
}

ProductContainer.propTypes = {
  showSidebar: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ProductContainer);
