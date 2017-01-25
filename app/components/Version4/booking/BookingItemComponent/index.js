/**
*
* BookingItemComponent
*
*/

import React, { PropTypes } from 'react';
import { Panel } from 'react-bootstrap';

function BookingItemComponent({ title, region, systems, facilities, accounts }) {
  return (
    <Panel>
      <div className="title">
        {title}
        <button className="btn-details">Details</button>
      </div>
      <div className="region">
        {region}
      </div>
      <ul>
        <li>
          Systems: <span>({systems})</span>
        </li>
        <li>
          Facilities: <span>({facilities})</span>
        </li>
        <li>
          Accounts: <span>({accounts})</span>
        </li>
      </ul>
      <button className="btn-remove">Remove</button>
    </Panel>
  );
}

BookingItemComponent.propTypes = {
  accounts: PropTypes.number.isRequired,
  facilities: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  systems: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default BookingItemComponent;
