/**
*
* AutosaveComponent
*
*/

import React from 'react';
import { Link } from 'react-router';
import { Button, Glyphicon } from 'react-bootstrap';

function AutosaveComponent() {
  return (
    <div className="autosave">
      <Link to="/dealHeader">
        <Glyphicon glyph="align-justify" />
      </Link>
      <Button bsStyle="primary">Send to approval</Button>
      <small>
        Autosaved:<br />
        14:10 01. Dic. 2016
      </small>
    </div>
  );
}

export default AutosaveComponent;
