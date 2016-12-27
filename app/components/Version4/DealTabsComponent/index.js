/**
*
* DealTabsComponent
*
*/

import React, { PropTypes } from 'react';
import { Nav, NavItem, Badge } from 'react-bootstrap';

function DealTabsComponent({ sublimit }) {
  return (
    <Nav bsStyle="pills" activeKey={2}>
      <NavItem eventKey={1} href="#">Dashboard</NavItem>
      <NavItem eventKey={2} href="#">Limits {sublimit && <Badge>2</Badge>}</NavItem>
      <NavItem eventKey={3} href="#">Counterparties</NavItem>
      <NavItem eventKey={4} href="#">Collaterals</NavItem>
      <NavItem eventKey={5} href="#">Contacts</NavItem>
    </Nav>
  );
}

DealTabsComponent.propTypes = {
  sublimit: PropTypes.bool.isRequired,
};

export default DealTabsComponent;
