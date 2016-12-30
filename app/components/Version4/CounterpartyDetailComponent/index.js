/**
*
* CounterpartyDetailComponent
*
*/

import React, { PropTypes } from 'react';
import { Button, Row, Col, Tab, Nav, NavItem, FormGroup, ControlLabel, ButtonGroup, FormControl } from 'react-bootstrap';

import KeyValueComponent from '../../../components/Version4/KeyValueComponent';

function CounterpartyDetailComponent({ expand, expandDetails }) {
  let expandButtonLabel;
  if (expand) {
    expandButtonLabel = 'Collapse details';
  } else {
    expandButtonLabel = 'Expand details';
  }
  return (
    <div className={(expand) ? 'expanded' : ''}>
      <div className="no-padding counterparty-detail">
        <KeyValueComponent
          label="CRM Responsible"
          value="Peter Mustermann"
        />

        <KeyValueComponent
          label="Credit rating"
          value="iA"
          colSize={5}
        />

        <KeyValueComponent
          label="Score card"
          value="1101"
          colSize={7}
        />

        <KeyValueComponent
          label="Counterparty type"
          value="CORPORATE"
        />

        <KeyValueComponent
          label="Country of domicile"
          value="GERMANY"
        />

        <KeyValueComponent
          label="Industry sector (NACE)"
          value="Industry description"
        />

        <h3>
          <small>LEGAL ENTITY</small>
        </h3>

        <KeyValueComponent
          label="Paragon ID"
          value="1234567890"
          colSize={5}
        />

        <KeyValueComponent
          label="Name"
          value="SIEMENS AKTIENGESELLSCHAFT"
          colSize={7}
        />

        <h3>
          <small>PARENT</small>
        </h3>

        <KeyValueComponent
          label="Paragon ID"
          value="1234567890"
          colSize={5}
        />

        <KeyValueComponent
          label="Name"
          value="SIEMENS AKTIENGESELLSCHAFT"
          colSize={7}
        />

        <KeyValueComponent
          label="Credit rating"
          value="iA"
        />
      </div>
      <p className="text-center">
        <Button bsStyle="info" onClick={expandDetails}>
          {expandButtonLabel}
        </Button>
      </p>
      <hr />
      <div className="counterparty-role">
        <p>Counterparty role in the deal</p>
        <Tab.Container id="roles" defaultActiveKey="clientObligor">
          <div>
            <Row>
              <Col sm={12}>
                <Nav bsStyle="pills">
                  <NavItem eventKey="clientObligor">
                    Client & Obligor
                  </NavItem>
                  <NavItem eventKey="client">
                    Client
                  </NavItem>
                  <NavItem eventKey="obligor">
                    Obligor
                  </NavItem>
                  <NavItem eventKey="guarantor">
                    Guarantor
                  </NavItem>
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
      <p className="text-center">
        <Button bsStyle="primary">Add to the list</Button>
      </p>
    </div>
  );
}

CounterpartyDetailComponent.propTypes = {
  expand: PropTypes.bool,
  expandDetails: PropTypes.func,
};

export default CounterpartyDetailComponent;
