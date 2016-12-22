/**
*
* AutosaveComponent
*
*/

import React, { PropTypes } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

function AutosaveComponent({ showSidebar }) {
  return (
    <div className="autosave">
      <button onClick={showSidebar}>
        <Glyphicon glyph="align-justify" />
      </button>
      <Button bsStyle="primary">Send to approval</Button>
      <small>
        Autosaved:<br />
        14:10 01. Dic. 2016
      </small>
    </div>
  );
}

AutosaveComponent.propTypes = {
  showSidebar: PropTypes.func,
};

export default AutosaveComponent;
