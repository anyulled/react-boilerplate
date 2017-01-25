/**
*
* DateField
*
*/

import React from 'react';
import { FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

function DateField() {
  return (
    <InputGroup>
      <FormControl type="text" />
      <InputGroup.Addon>
        <Glyphicon glyph="calendar" />
      </InputGroup.Addon>
    </InputGroup>
  );
}

export default DateField;
