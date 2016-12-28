/**
*
* KeyValueComponent
*
*/

import React, { PropTypes } from 'react';
import { Row, Col, ControlLabel } from 'react-bootstrap';

function KeyValueComponent({ label, value }) {
  return (
    <Row>
      <Col md={12}>
        <ControlLabel>{label}</ControlLabel>
        <b>{value}</b>
      </Col>
    </Row>
  );
}

KeyValueComponent.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default KeyValueComponent;
