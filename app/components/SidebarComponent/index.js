/**
*
* SidebarComponent
*
*/

import React from 'react';
import { Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';

import ActivePageContainer from '../../containers/ActivePageContainer';

class SidebarComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="sidebar">
        <ActivePageContainer />
        <Tab.Container id="menu-page">
          <Row className="clearfix">
            <Col sm={12}>
              <Nav bsStyle="pills" stacked>
                <NavItem>
                  Limits
                  <span className="percent">30%</span>
                  <span className="edit">Edit</span>
                  <span className="expand">Click to expand</span>
                </NavItem>

                <NavItem>
                  Counterpart
                  <span className="percent">0%</span>
                  <span className="edit">Edit</span>
                  <span className="expand">Click to expand</span>
                </NavItem>

                <NavItem>
                  Contacts
                  <span className="percent done">100%</span>
                  <span className="edit">Edit</span>
                  <span className="expand">Click to expand</span>
                </NavItem>

                <NavItem>
                  Collaterals
                  <span className="percent">0%</span>
                  <span className="edit">Edit</span>
                  <span className="expand">Click to expand</span>
                </NavItem>

                <NavItem>
                  DE-Risking
                  <span className="edit">Edit</span>
                  <span className="expand">Click to expand</span>
                </NavItem>

                <NavItem className="blocked">
                  Utilization & Exposure
                  <span className="not-available">Not available</span>
                </NavItem>

                <NavItem className="blocked">
                  Risk & Return
                  <span className="not-available">Not available</span>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default SidebarComponent;
