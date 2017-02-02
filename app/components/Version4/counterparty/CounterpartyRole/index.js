/**
*
* CounterpartyRole
*
*/

import React from 'react';
import { Button, Row, Col, Tab, Nav, NavItem, FormGroup, ControlLabel, ButtonGroup, FormControl } from 'react-bootstrap';

function CounterpartyRole() {
  return (
    <div className="counterparty-role">
      <p>Counterparty role in the deal</p>
      <Tab.Container id="roles" defaultActiveKey="clientObligor">
        <div>
          <Row>
            <Col sm={12}>
              <Nav bsStyle="pills">
                <NavItem eventKey="clientObligor"> Client & Obligor </NavItem>
                <NavItem eventKey="client"> Client </NavItem>
                <NavItem eventKey="obligor"> Obligor </NavItem>
                <NavItem eventKey="guarantor"> Guarantor</NavItem>
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Tab.Content animation>
                <Tab.Pane eventKey="clientObligor">
                  <FormGroup>
                    <ControlLabel>Joint and several liability</ControlLabel>
                    <ButtonGroup>
                      <Button bsStyle="default">No</Button>
                      <Button bsStyle="success">Yes</Button>
                    </ButtonGroup>
                  </FormGroup>
                </Tab.Pane>

                <Tab.Pane eventKey="client">
                </Tab.Pane>

                <Tab.Pane eventKey="obligor">
                  <FormGroup>
                    <ControlLabel>Joint and several liability</ControlLabel>
                    <ButtonGroup>
                      <Button bsStyle="default">No</Button>
                      <Button bsStyle="success">Yes</Button>
                    </ButtonGroup>
                  </FormGroup>

                  <FormGroup>
                    <ControlLabel>Linked to client</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                    </FormControl>
                  </FormGroup>
                </Tab.Pane>

                <Tab.Pane eventKey="guarantor">
                  <FormGroup>
                    <ControlLabel>Linked to counterparty</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                    </FormControl>
                  </FormGroup>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </div>
      </Tab.Container>
    </div>
  );
}

export default CounterpartyRole;
