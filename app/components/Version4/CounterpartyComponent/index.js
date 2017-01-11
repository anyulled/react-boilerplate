/**
*
* CounterpartyComponent
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

import CounterpartyItemComponent from '../../../components/Version4/CounterpartyItemComponent';

function CounterpartyComponent({ title, counterpartyAdded }) {
  return (
    <div className="content-block">
      <h3 className="hide">{title}</h3>

      {counterpartyAdded &&
        <div>
          <p className="text-center">No counterparties were added yet</p>
          <p className="text-center">Please start adding a client</p>
        </div>
      }

      {!counterpartyAdded &&
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
  title: PropTypes.string.isRequired,
};

export default CounterpartyComponent;
