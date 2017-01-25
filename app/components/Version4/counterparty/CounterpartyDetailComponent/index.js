/**
*
* CounterpartyDetailComponent
*
*/

import React, { PropTypes } from 'react';
import { Button, Row, Col, Tab, Nav, NavItem, FormGroup, ControlLabel, ButtonGroup, FormControl } from 'react-bootstrap';

import KeyValueComponent from '../../../../components/Version4/KeyValueComponent';

function CounterpartyDetailComponent({ expand, expandDetails, showSelectedProducts, data }) {
  let expandButtonLabel;
  if (expand) {
    expandButtonLabel = 'Collapse details';
  } else {
    expandButtonLabel = 'Expand details';
  }

  const generalList = data.general.map((item, key) =>
    <KeyValueComponent key={key} label={item.label} value={item.value} colSize={item.colSize} />
  );

  const legalEntityList = data.legalEntity.map((item, key) =>
    <KeyValueComponent key={key} label={item.label} value={item.value} colSize={item.colSize} />
  );

  const parentList = data.parent.map((item, key) =>
    <KeyValueComponent key={key} label={item.label} value={item.value} colSize={item.colSize} />
  );

  return (
    <div className={(expand) ? 'expanded' : ''}>
      <div className="no-padding counterparty-detail">
        {generalList}

        <h3>
          <small>LEGAL ENTITY</small>
        </h3>

        {legalEntityList}

        <h3>
          <small>PARENT</small>
        </h3>
        {parentList}
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
      <p className="text-center">
        <Button bsStyle="primary" onClick={showSelectedProducts}>Add to the list</Button>
      </p>
    </div>
  );
}

CounterpartyDetailComponent.propTypes = {
  data: PropTypes.object.isRequired,
  expand: PropTypes.bool,
  expandDetails: PropTypes.func,
  showSelectedProducts: PropTypes.func.isRequired,
};

export default CounterpartyDetailComponent;
