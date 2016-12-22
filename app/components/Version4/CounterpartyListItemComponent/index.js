/**
*
* CounterpartyListItemComponent
*
*/

import React, { PropTypes } from 'react';
import { Panel, Glyphicon } from 'react-bootstrap';

function CounterpartyListItemComponent({ viewCounterparty, title }) {
  return (
    <Panel>
      {title}
      <button>
        <Glyphicon glyph="chevron-right" onClick={viewCounterparty} />
      </button>
    </Panel>
  );
}

CounterpartyListItemComponent.propTypes = {
  title: PropTypes.string.isRequired,
  viewCounterparty: PropTypes.func.isRequired,
};

export default CounterpartyListItemComponent;
