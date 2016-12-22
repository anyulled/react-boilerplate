/**
*
* CounterpartyListItemComponent
*
*/

import React, { PropTypes } from 'react';
import { Panel, Glyphicon } from 'react-bootstrap';

function CounterpartyListItemComponent({ hideSidebar, title }) {
  return (
    <Panel>
      {title}
      <button>
        <Glyphicon glyph="chevron-right" onClick={hideSidebar} />
      </button>
    </Panel>
  );
}

CounterpartyListItemComponent.propTypes = {
  hideSidebar: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default CounterpartyListItemComponent;
