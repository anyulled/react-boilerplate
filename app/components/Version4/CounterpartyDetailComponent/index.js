/**
*
* CounterpartyDetailComponent
*
*/

import React, { PropTypes } from 'react';
import { Button, ControlLabel, Glyphicon, Row, Col, ButtonGroup } from 'react-bootstrap';


function CounterpartyDetailComponent({ hideSidebar, backCounterpartyList }) {
  return (
    <div className="content-block">
      <h3>
        <Glyphicon glyph="remove" onClick={() => { hideSidebar(); backCounterpartyList(); }} />
        Add counterparty
      </h3>
      <div className="scroll">
        <form>
          <Row>
            <Col md={12}>
              <ControlLabel>CRM Responsible</ControlLabel>
              <b>Peter Mustermann</b>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <ControlLabel>Credit rating</ControlLabel>
              <b>iA</b>
            </Col>
            <Col md={8}>
              <ControlLabel>Score card</ControlLabel>
              <b>SIEMENS AKTIENGESELLSCHAFT</b>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <ControlLabel>Client type</ControlLabel>
              <b>CORPORATE</b>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <ControlLabel>Country of domicile</ControlLabel>
              <b>GERMANY</b>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <ControlLabel>Industry sector (NACE)</ControlLabel>
              <b>Industry description</b>
            </Col>
          </Row>
          <h3>
            <small>LEGAL ENTITY</small>
          </h3>
          <Row>
            <Col md={4}>
              <ControlLabel>Paragon ID</ControlLabel>
              <b>1234567890</b>
            </Col>
            <Col md={8}>
              <ControlLabel>Name</ControlLabel>
              <b>SIEMENS AKTIENGESELLSCHAFT</b>
            </Col>
          </Row>
          <h3>
            <small>PARENT</small>
          </h3>
          <Row>
            <Col md={4}>
              <ControlLabel>Paragon ID</ControlLabel>
              <b>1234567890</b>
            </Col>
            <Col md={8}>
              <ControlLabel>Name</ControlLabel>
              <b>SIEMENS AKTIENGESELLSCHAFT</b>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <ControlLabel>Credit rating</ControlLabel>
              <b>iA</b>
            </Col>
          </Row>
          <h3>
            <small>GUARANTOR</small>
          </h3>
          <Row>
            <Col md={4}>
              <ControlLabel>Paragon ID</ControlLabel>
              <b>1234567890</b>
            </Col>
            <Col md={8}>
              <ControlLabel>Name</ControlLabel>
              <b>SIEMENS AKTIENGESELLSCHAFT</b>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <ControlLabel>Credit rating</ControlLabel>
              <b>iA</b>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <a>Add Guarantor for this client</a>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <ControlLabel>Client is the Obligor</ControlLabel>
              <ButtonGroup>
                <Button>No</Button>
                <Button bsStyle="success">Yes</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </form>
      </div>
      <p className="text-center fixedButtons">
        <Button bsStyle="primary" onClick={() => { hideSidebar(); backCounterpartyList(); }}>Add</Button>
        <Button bsStyle="default" onClick={() => { hideSidebar(); backCounterpartyList(); }}>Cancel</Button>
        <Button bsStyle="default" onClick={backCounterpartyList}>Back</Button>
      </p>
    </div>
  );
}

CounterpartyDetailComponent.propTypes = {
  backCounterpartyList: PropTypes.func,
  hideSidebar: PropTypes.func,
};

export default CounterpartyDetailComponent;
