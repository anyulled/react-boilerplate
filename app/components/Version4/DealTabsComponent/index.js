/**
*
* DealTabsComponent
*
*/

import React from 'react';
import { Nav, NavItem, Glyphicon } from 'react-bootstrap';

class DealTabsComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Nav activeKey={2}>
        <NavItem eventKey={1} href="#">
          <Glyphicon glyph="th-large" />
          Dashboard
        </NavItem>
        <NavItem eventKey={2} href="#">
          <Glyphicon glyph="briefcase" />
          Limits
        </NavItem>
        <NavItem eventKey={3} href="#">
          <Glyphicon glyph="user" />
          Counterparties
        </NavItem>
        <NavItem eventKey={4} href="#">
          <Glyphicon glyph="transfer" />
          Collaterals
        </NavItem>
        <NavItem eventKey={5} href="#">
          <Glyphicon glyph="envelope" />
          Contacts
        </NavItem>
      </Nav>
    );
  }
}

export default DealTabsComponent;
