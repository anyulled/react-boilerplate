/*
 *
 * BreadcrumbContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import BreadcrumbComponent from '../../components/BreadcrumbComponent';

export class BreadcrumbContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      pageActionsBreadcrumb: false,
    };

    if (this.props.location.pathname === '/gridlayout') {
      this.state = {
        pageActionsBreadcrumb: true,
      };
    }
  }
  render() {
    return (
      <BreadcrumbComponent {...this.props} pageActionsBreadcrumb={this.state.pageActionsBreadcrumb}/>
    );
  }
}

BreadcrumbContainer.propTypes = {
  location: React.PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(BreadcrumbContainer);
