/**
*
* DealDetailsComponent
*
*/

import React from 'react';


class DealDetailsComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ul className="deal-details">
        <li>
          <span>No nickname</span>
        </li>
        <li>
          <span>No description</span>
        </li>
        <li>
          <span>No documents</span>
        </li>
      </ul>
    );
  }
}

export default DealDetailsComponent;
