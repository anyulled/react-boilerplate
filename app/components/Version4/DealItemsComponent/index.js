/**
*
* DealItemsComponent
*
*/

import React from 'react';


class DealItemsComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ul className="sidebar-list">
        <li className="active">
          <a href="">Main Data</a>
        </li>
        <li>
          <a href="">Limits</a>
        </li>
        <li>
          <a href="">Products</a>
        </li>
        <li>
          <a href="">Counterparties</a>
        </li>
        <li>
          <a href="">Booking</a>
        </li>
        <li>
          <a href="">Collateral</a>
        </li>
        <li>
          <a href="">DE-Risking</a>
        </li>
      </ul>
    );
  }
}

export default DealItemsComponent;
