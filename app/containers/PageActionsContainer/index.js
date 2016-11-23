/*
 *
 * PageActionsContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import PageActions from '../../components/PageActions';

export class PageActionsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      pageActionsPosition: '',
    };

    if (this.props.location.pathname === '/gridlayout') {
      this.state = {
        pageActionsPosition: 'breadcrumb',
      };
    }
  }

  render() {
    return (
      <PageActions pageActionsPosition={this.state.pageActionsPosition} />
    );
  }
}

PageActionsContainer.propTypes = {
  location: React.PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(PageActionsContainer);
