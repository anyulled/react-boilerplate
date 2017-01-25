/**
*
* CounterpartyComponent
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

import CounterpartyItemComponent from '../CounterpartyItemComponent';

function CounterpartyComponent({ counterpartyAdded }) {
  return (
    <div className="content-block">
      {!counterpartyAdded &&
        <div>
          <p className="text-center">No counterparties were added yet</p>
          <p className="text-center">Please start adding a client</p>
        </div>
      }

      {counterpartyAdded &&
        <CounterpartyItemComponent title="CLIENTS">
          <CounterpartyItemComponent title="GUARANTOR" />
          <CounterpartyItemComponent title="OBLIGORS" btnGroup />
          <CounterpartyItemComponent btnGroup>
            <CounterpartyItemComponent title="GUARANTOR" />
          </CounterpartyItemComponent>
        </CounterpartyItemComponent>
      }

      <p className="text-center">
        <Link to="/addCounterparty">
          <Button bsStyle="primary">Add counterparty</Button>
        </Link>
      </p>
    </div>
  );
}

CounterpartyComponent.propTypes = {
  counterpartyAdded: PropTypes.bool,
};

export default CounterpartyComponent;
