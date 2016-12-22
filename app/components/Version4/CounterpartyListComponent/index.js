/**
*
* CounterpartyListComponent
*
*/

import React, { PropTypes } from 'react';
import CounterpartyListItemComponent from '../../../components/Version4/CounterpartyListItemComponent';

function CounterpartyListComponent({ viewCounterparty }) {
  const indents = [];
  for (let i = 1; i <= 5; i += 1) {
    indents.push(
      <CounterpartyListItemComponent
        viewCounterparty={viewCounterparty}
        title={`00${i} - Lorem ipsum dolor sit amet`}
      />
    );
  }
  return (
    <div className="tree">
      {indents}
      <a className="text-center load-more">Load (05) more</a>
    </div>
  );
}

CounterpartyListComponent.propTypes = {
  viewCounterparty: PropTypes.func.isRequired,
};

export default CounterpartyListComponent;
