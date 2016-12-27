/**
*
* DealSwitchViewComponent
*
*/

import React, { PropTypes } from 'react';
import { Glyphicon } from 'react-bootstrap';

function DealSwitchViewComponent({ title, icon, switchView }) {
  return (
    <div>
      <button className="switch-view" onClick={switchView}>
        <small>{title}</small>
        <Glyphicon glyph={icon} />
      </button>
    </div>
  );
}

DealSwitchViewComponent.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  switchView: PropTypes.func.isRequired,
};

export default DealSwitchViewComponent;
