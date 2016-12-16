/**
*
* AutosaveComponent
*
*/

import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

class AutosaveComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="autosave">
        <Glyphicon glyph="align-justify" />
        <Button bsStyle="primary">Send to approval</Button>
        <small>
          Autosaved:<br />
          14:10 01. Dic. 2016
        </small>
      </div>
    );
  }
}

export default AutosaveComponent;
