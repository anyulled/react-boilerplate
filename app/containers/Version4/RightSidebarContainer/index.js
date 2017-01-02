/*
 *
 * RightSidebarContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import RightSidebarComponent from '../../../components/Version4/RightSidebarComponent';

export class RightSidebarContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      counterpartyDetail: false,
    };
  }

  viewCounterparty = () => {
    this.setState({ counterpartyDetail: true });
  }

  backCounterpartyList = () => {
    this.setState({ counterpartyDetail: false });
  }

  render() {
    return (
      <RightSidebarComponent
        visible={this.props.visible}
        hideSidebar={this.props.hideSidebar}
        newSubLimit={this.props.newSubLimit}
        sidebarComponent={this.props.sidebarComponent}
        counterpartyDetail={this.state.counterpartyDetail}
        backCounterpartyList={this.backCounterpartyList}
        viewCounterparty={this.viewCounterparty}
        addDealHeaderInformation={this.props.addDealHeaderInformation}
        sidebarClass={this.props.sidebarClass}
        newProduct={this.props.newProduct}
        newCounterparty={this.props.newCounterparty}
      />
    );
  }
}

RightSidebarContainer.propTypes = {
  addDealHeaderInformation: PropTypes.func.isRequired,
  hideSidebar: PropTypes.func.isRequired,
  newCounterparty: PropTypes.func.isRequired,
  newProduct: PropTypes.func.isRequired,
  newSubLimit: PropTypes.func.isRequired,
  sidebarClass: PropTypes.string.isRequired,
  sidebarComponent: PropTypes.string.isRequired,
  visible: PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(RightSidebarContainer);
