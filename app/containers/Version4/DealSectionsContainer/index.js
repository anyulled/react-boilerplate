/*
 *
 * DealSectionsContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import DealSwitchViewContainer from '../DealSwitchViewContainer';
import DealItemsContainer from '../DealItemsContainer';

export class DealSectionsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="content-pane pane-3 deal-sections">
        <DealSwitchViewContainer />
        <DealItemsContainer />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(DealSectionsContainer);
