/**
*
* CollateralItem
*
*/

import React, { PropTypes } from 'react';
import { Panel } from 'react-bootstrap';

function CollateralItem({ value1, value2, share, description }) {
  let shortString = '';
  if (description.length > 55) {
    shortString = `${description.substring(0, 55)} ...`;
  } else {
    shortString = description;
  }
  return (
    <Panel>
      <div className="values">
        <span className="value1">
          {value1}
        </span>

        <span className="value2">
          {value2}
        </span>

        <span className="share">
          {share} of share
        </span>
        <button className="btn-details">Details</button>
      </div>
      <div className="description">
        {shortString}
        <button className="btn-remove">Remove</button>
      </div>
    </Panel>
  );
}

CollateralItem.propTypes = {
  description: PropTypes.string.isRequired,
  share: PropTypes.string.isRequired,
  value1: PropTypes.string.isRequired,
  value2: PropTypes.string.isRequired,
};

export default CollateralItem;
