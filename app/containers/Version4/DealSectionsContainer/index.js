/*
 *
 * DealSectionsContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';

import DealSwitchViewContainer from '../../../containers/Version4/DealSwitchViewContainer';
import DealItemsContainer from '../../../containers/Version4/DealItemsContainer';

export class DealSectionsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Col className="content-pane pane-3 deal-sections">
        <div className="fixed">
          <DealSwitchViewContainer />
          <DealItemsContainer />
        </div>
      </Col>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(DealSectionsContainer);
