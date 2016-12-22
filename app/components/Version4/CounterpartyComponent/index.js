/**
*
* CounterpartyComponent
*
*/

import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

function CounterpartyComponent({ title, showSidebar }) {
  return (
    <div className="content-block">
      <h3>{title}</h3>
      <p className="text-center">No counterparties were added yet</p>
      <p className="text-center">Please start adding a client</p>
      <p className="text-center">
        <Button bsStyle="primary" onClick={showSidebar}>Add Client</Button>
      </p>
    </div>
  );
}

CounterpartyComponent.propTypes = {
  showSidebar: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default CounterpartyComponent;
