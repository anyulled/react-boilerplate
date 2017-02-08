/*
 *
 * DistributePage
 *
 */
import React from 'react';
import { Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem, Breadcrumb } from 'react-bootstrap';
import Deal from '../../components/Deal';
import DealLimits from '../../components/DealLimits';
import Counterparties from '../../components/Counterparties';
import Collaterals from '../../components/Collaterals';
import Contacts from '../../components/Contacts';
import Derisking from '../../components/Derisking';
import Utilization from '../../components/Utilization';
import RiskReturn from '../../components/RiskReturn';
import { connect } from 'react-redux';
export class DistributePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">DB Distribute</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
        <Breadcrumb>
          <Breadcrumb.Item href="#">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
            Deals
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            2016_00001
          </Breadcrumb.Item>
        </Breadcrumb>
        <Grid fluid>
          <Row>
            <Col sm={4}><Deal /></Col>
            <Col sm={4}><DealLimits /></Col>
            <Col sm={4}><Counterparties /></Col>
            <Col sm={4}><Collaterals /></Col>
            <Col sm={4}><Contacts /></Col>
            <Col sm={4}><Derisking /></Col>
            <Col sm={4}><Utilization /></Col>
            <Col sm={4}><RiskReturn /></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(DistributePage);
