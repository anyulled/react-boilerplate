/**
*
* CounterpartySelectedComponent
*
*/

import React from 'react';
// import { Panel, ButtonGroup, Button } from 'react-bootstrap';

import CounterpartyItemComponent from '../../../components/Version4/CounterpartyItemComponent';

function CounterpartySelectedComponent() {
  return (
    <div className="counterparty-list">

      <CounterpartyItemComponent title="CLIENTS & OBLIGORS" btnGroup>
        <CounterpartyItemComponent title="GUARANTOR" />
      </CounterpartyItemComponent>

      <CounterpartyItemComponent title="CLIENTS">
        <CounterpartyItemComponent title="GUARANTOR" />
        <CounterpartyItemComponent title="OBLIGORS" btnGroup />
        <CounterpartyItemComponent btnGroup>
          <CounterpartyItemComponent title="GUARANTOR" />
        </CounterpartyItemComponent>
      </CounterpartyItemComponent>

      <CounterpartyItemComponent>
        <CounterpartyItemComponent title="GUARANTOR" emptyGuarantor />
        <CounterpartyItemComponent title="OBLIGORS" emptyObligors />
      </CounterpartyItemComponent>

      <p className="text-center">
        <b>Drag and drop</b> Counterparties to reorder or change role manually.
      </p>
    </div>
  );
}

export default CounterpartySelectedComponent;
