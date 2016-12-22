/*
 *
 * AddCounterpartyContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import AddCounterpartyComponent from '../../../components/Version4/AddCounterpartyComponent';

export class AddCounterpartyContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      showItems: false,
    };
  }

  searchItems(e) {
    if (e.target.value.length >= 3) {
      this.setState({ showItems: true });
    } else {
      this.setState({ showItems: false });
    }
  }

  render() {
    return (
      <AddCounterpartyComponent
        hideSidebar={this.props.hideSidebar}
        searchItems={(e) => this.searchItems(e)}
        showItems={this.state.showItems}
        viewCounterparty={this.props.viewCounterparty}
      />
    );
  }
}

AddCounterpartyContainer.propTypes = {
  hideSidebar: PropTypes.func.isRequired,
  viewCounterparty: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(AddCounterpartyContainer);
