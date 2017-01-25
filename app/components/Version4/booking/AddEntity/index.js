/**
*
* AddEntity
*
*/

import React, { PropTypes } from 'react';
import { ControlLabel, FormControl, FormGroup, Button } from 'react-bootstrap';

function AddEntity({ children, clickFunction, label }) {
  return (
    <div>
      <FormGroup>
        <ControlLabel>{label}</ControlLabel>
        <FormControl type="text" className="id-field" />
        <Button bsStyle="info" onClick={clickFunction}>Add to this entity</Button>
        {children}
      </FormGroup>
      <hr />
    </div>
  );
}

AddEntity.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  clickFunction: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default AddEntity;
