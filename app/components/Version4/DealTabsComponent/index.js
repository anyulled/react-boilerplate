/**
*
* DealTabsComponent
*
*/

import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

class DealTabsComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Nav bsStyle="pills" activeKey={2}>
        <NavItem eventKey={1} href="#">Dashboard</NavItem>
        <NavItem eventKey={2} href="#">Limits</NavItem>
        <NavItem eventKey={3} href="#">Counterparties</NavItem>
        <NavItem eventKey={4} href="#">Collaterals</NavItem>
        <NavItem eventKey={5} href="#">Contacts</NavItem>
      </Nav>
    );
  }
}

export default DealTabsComponent;
