/**
*
* HeaderComponent
*
*/

import React from 'react';
import { Navbar, Nav, NavDropdown, NavItem, Glyphicon, MenuItem } from 'react-bootstrap';

class HeaderComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Navbar fluid fixedTop className="navbar navbar-default">
        <Navbar.Header>
          <Navbar.Brand className="ab-logo">
            DB Distribute
          </Navbar.Brand>
        </Navbar.Header>

        <Nav activeKey={2}>
          <NavItem eventKey={1} href="/">Dashboard</NavItem>
          <NavDropdown eventKey={2} title="Deals" id="deals-dropdown">
            <MenuItem eventKey={2.1} href="/deals_v4">Deals v4</MenuItem>
          </NavDropdown>
        </Nav>

        <Nav pullRight>
          <NavDropdown eventKey={1} title="System" id="system-dropdown">
          </NavDropdown>
          <NavItem>
            <Glyphicon glyph="user" /> Perez Artigues, Ramon
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default HeaderComponent;
