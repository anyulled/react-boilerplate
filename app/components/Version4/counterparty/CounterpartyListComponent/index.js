/**
*
* CounterpartyListComponent
*
*/

import React, { PropTypes } from 'react';
import { Glyphicon } from 'react-bootstrap';

function CounterpartyListComponent({ viewCounterparty }) {
  const counterpartyItems = [];
  for (let i = 1; i <= 5; i += 1) {
    counterpartyItems.push(
      <li key={i}>
        {`00${i} - Lorem ipsum dolor sit amet`}
        <button>
          <Glyphicon glyph="chevron-right" onClick={viewCounterparty} />
        </button>
      </li>
    );
  }
  return (
    <div>
      <ul className="list">
        {counterpartyItems}
      </ul>
      <a className="text-center load-more">Load (05) more</a>
    </div>
  );
}

CounterpartyListComponent.propTypes = {
  viewCounterparty: PropTypes.func.isRequired,
};

export default CounterpartyListComponent;
