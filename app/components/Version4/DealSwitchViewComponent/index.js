/**
*
* DealSwitchViewComponent
*
*/

import React from 'react';
import { Glyphicon } from 'react-bootstrap';

class DealSwitchViewComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div className="switch-view">
          <small>Switch to tree</small>
          <Glyphicon glyph="align-left" />
        </div>
        <div className="switch-view hide">
          <small>Switch to list</small>
          <Glyphicon glyph="list" />
        </div>
      </div>
    );
  }
}

export default DealSwitchViewComponent;
