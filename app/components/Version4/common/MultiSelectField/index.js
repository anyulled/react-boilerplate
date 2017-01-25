/**
*
* MultiSelectField
*
*/

import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

function MultiSelectField({ data }) {
  const optionsList = data.options.map((item, key) =>
    <option key={key}>{item.value}</option>
  );
  return (
    <FormGroup>
      <ControlLabel>{data.label}</ControlLabel>
      <FormControl componentClass="select" multiple={(data.multiple) ? 'multiple' : ''} placeholder="select" size="5">
        {optionsList}
      </FormControl>
    </FormGroup>
  );
}

MultiSelectField.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MultiSelectField;
