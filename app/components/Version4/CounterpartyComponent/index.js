/**
*
* CounterpartyComponent
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

import CounterpartyItemComponent from '../../../components/Version4/CounterpartyItemComponent';

function CounterpartyComponent({ title, counterpartyAdded, counterpartyAdded2 }) {
  return (
    <div className="content-block">
      <h3>{title}</h3>

      {!counterpartyAdded && !counterpartyAdded2 &&
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

      {counterpartyAdded2 &&
        <div>
          <CounterpartyItemComponent title="CLIENTS & OBLIGORS" btnGroup>
            <CounterpartyItemComponent title="GUARANTOR" />
          </CounterpartyItemComponent>

          <CounterpartyItemComponent title="CLIENTS" />
        </div>
      }

      <p className="text-center">
        <Link to="/addCounterparty">
          <Button bsStyle="primary">Add Client</Button>
        </Link>
      </p>
    </div>
  );
}

CounterpartyComponent.propTypes = {
  counterpartyAdded: PropTypes.bool,
  counterpartyAdded2: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default CounterpartyComponent;
