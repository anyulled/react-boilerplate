/**
*
* SearchField
*
*/

import React, { PropTypes } from 'react';
import { Glyphicon, ControlLabel, InputGroup, FormControl, FormGroup } from 'react-bootstrap';

function SearchField({ onChangeFunction, label, description }) {
  return (
    <form>
      <FormGroup>
        <ControlLabel>{label} <i>{description}</i></ControlLabel>
        <InputGroup>
          <FormControl type="text" onChange={onChangeFunction} />
          <InputGroup.Addon>
            <Glyphicon glyph="search" />
          </InputGroup.Addon>
        </InputGroup>
      </FormGroup>
    </form>
  );
}

SearchField.propTypes = {
  description: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChangeFunction: PropTypes.func.isRequired,
}

export default SearchField;
