/**
*
* BreadcrumbComponent
*
*/

import React from 'react';
import { Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';
import PageActions from '../PageActions';

class BreadcrumbComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="page-header-block navbar-fixed-top">
        <Grid fluid>
          <Row>
            <Col md={6} lg={8}>
              <Nav bsStyle="pills">
                <NavItem disabled className="current-page-title">You are here:</NavItem>
                <NavItem title="Item">DEALS</NavItem>
                <NavItem title="Item">DEAL ID XXX</NavItem>
                <NavItem disabled>Main Data</NavItem>
              </Nav>
            </Col>
            <Col md={6} lg={4}>
              <PageActions />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default BreadcrumbComponent;
