/**
*
* KeyValueComponent
*
*/

import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel } from 'react-bootstrap';

function KeyValueComponent({ label, value, colSize }) {
  return (
    <FormGroup className={`col-md-${colSize}`}>
      <ControlLabel>{label}</ControlLabel>
      <b>{value}</b>
    </FormGroup>
  );
}

KeyValueComponent.defaultProps = {
  colSize: 12,
};

KeyValueComponent.propTypes = {
  colSize: PropTypes.number,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default KeyValueComponent;
