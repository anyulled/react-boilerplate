/*
 *
 * Version4
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Glyphicon, Nav, NavItem } from 'react-bootstrap';

import DealTabsContainer from '../../containers/Version4/DealTabsContainer';
import AutosaveComponent from '../../components/Version4/AutosaveComponent';
import DealDetailsContainer from '../../containers/Version4/DealDetailsContainer';
// import NewDealForm from '../../components/Version4/NewDealForm';

export class Version4 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div className="navbar-fixed-top deal-header">
          <Grid fluid>
            <Row className="page-header-block">
              <Col md={12}>
                <AutosaveComponent />
                <h1>
                  <Glyphicon glyph="circle-arrow-left" />
                  Deal 1234567890
                </h1>
                <DealDetailsContainer />
                <DealTabsContainer />
              </Col>
            </Row>
          </Grid>
        </div>

        <Grid fluid className="deal-content">
          <Row className="row-stretch">
            <div className="content-pane pane-3 deal-sections">
              <div className="switch-view">
                <small>Switch to tree</small>
                <Glyphicon glyph="align-left" />
              </div>
              <div className="switch-view hide">
                <small>Switch to list</small>
                <Glyphicon glyph="list" />
              </div>
              <Nav stacked activeKey={1}>
                <NavItem eventKey={1} href="">Main Data</NavItem>
                <NavItem eventKey={2} href="">Limit</NavItem>
                <NavItem eventKey={3} href="">Product</NavItem>
                <NavItem eventKey={4} href="">Counterparty</NavItem>
                <NavItem eventKey={5} href="">Booking</NavItem>
                <NavItem eventKey={6} href="">Collateral</NavItem>
                <NavItem eventKey={7} href="">Contact</NavItem>
              </Nav>
            </div>

            <Col md={6} className="content-pane pane-2 left-pane">
            </Col>

            <Col md={6} className="content-pane">
            </Col>
          </Row>

          <Row className="tab-header hide">
            <Col md={6} className="content-pane">
              <div className="top-toolbar">
                <h2 className="tab-title">Global Limits</h2>
              </div>
            </Col>

            <Col md={6} className="content-pane">
              <div className="top-toolbar">
                <h2 className="tab-title">
                  Deal Limits <Glyphicon glyph="resize-full" />
                </h2>
              </div>
            </Col>
          </Row>

          <Row className="row-stretch hide">
            <Col md={6} className="content-pane pane-2">
              <div className="top-toolbar">
                <h2 className="tab-title">Global Limits</h2>
              </div>
              <div className="content-pane pane-3 col-md-4">
                aaaaa
              </div>
              <div className="content-pane pane-2 col-md-8">
                aaaaa
              </div>
            </Col>
          </Row>

          <Row className="row-stretch hide">
            <Col md={6} className="content-pane pane-2 left-pane">
              <div className="top-toolbar">
                <h2 className="tab-title">Global Limits</h2>
              </div>
              <div className="content-pane pane-3 col-md-4">
                aaaaa
              </div>
              <div className="content-pane pane-2 col-md-8">
                aaaaa
              </div>
            </Col>

            <Col md={6} mdOffset={6} className="content-pane right-pane">
              <div className="top-toolbar">
                <h2 className="tab-title">
                  Deal Limits <Glyphicon glyph="resize-full" />
                </h2>
              </div>
            </Col>
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

export default connect(null, mapDispatchToProps)(Version4);
