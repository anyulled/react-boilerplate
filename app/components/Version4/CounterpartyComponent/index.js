/**
*
* CounterpartyComponent
*
*/

import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

import CounterpartyItemComponent from '../../../components/Version4/CounterpartyItemComponent';

function CounterpartyComponent({ title, showSidebar }) {
  return (
    <div className="content-block">
      <h3>{title}</h3>
      <p className="text-center hide">No counterparties were added yet</p>
      <p className="text-center hide">Please start adding a client</p>

      <CounterpartyItemComponent title="CLIENTS & OBLIGORS">
        <CounterpartyItemComponent title="GUARANTOR" />
        <CounterpartyItemComponent title="OBLIGORS" btnGroup />
        <CounterpartyItemComponent btnGroup>
          <CounterpartyItemComponent title="GUARANTOR" />
        </CounterpartyItemComponent>
      </CounterpartyItemComponent>

      <p className="text-center">
        <Button bsStyle="primary" onClick={showSidebar}>Add Client</Button>
      </p>
    </div>
  );
}

CounterpartyComponent.propTypes = {
  showSidebar: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export default CounterpartyComponent;
