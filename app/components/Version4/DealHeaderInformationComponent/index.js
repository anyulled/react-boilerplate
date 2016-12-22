/**
*
* DealHeaderInformationComponent
*
*/

import React, { PropTypes } from 'react';
import { Glyphicon, Row, Col, ControlLabel, FormControl } from 'react-bootstrap';

function DealHeaderInformationComponent({ hideSidebar }) {
  return (
    <div className="content-block">
      <h3>
        <Glyphicon glyph="remove" onClick={hideSidebar} />
        Deal header information
      </h3>
      <form className="dealInformationForm">
        <Row>
          <Col md={7}>
            <ControlLabel>Nickname</ControlLabel>
            <FormControl type="text" />
          </Col>
          <Col md={5}>
            <small>(optional)</small>
          </Col>
        </Row>

        <Row>
          <Col md={9}>
            <ControlLabel>Description</ControlLabel>
            <FormControl componentClass="textarea" bsSize="lg" />
          </Col>

          <Col md={3}>
            <small>(optional)</small>
          </Col>
        </Row>

        <Row>
          <Col md={7}>
            <ControlLabel>Documents</ControlLabel>
            <FormControl type="text" />
          </Col>

          <Col md={5}>
            <small>(optional)</small>
          </Col>
        </Row>
      </form>
    </div>
  );
}

DealHeaderInformationComponent.propTypes = {
  hideSidebar: PropTypes.func.isRequired,
};

export default DealHeaderInformationComponent;
