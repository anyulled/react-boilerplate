/**
*
* AllowedCurrenciesComponent
*
*/

import React, { PropTypes } from 'react';

import { Button, Panel } from 'react-bootstrap';

function AllowedCurrenciesComponent({ currencies }) {
  const listCurrencies = currencies.map((item, key) =>
    <Panel key={key}>
      {item.currency} <button className="remove">Remove</button>
    </Panel>
  );

  return (
    <div className="allowed-currencies">
      {listCurrencies}
      <p className="text-center">
        <Button bsStyle="primary">Add currencies</Button>
      </p>
    </div>
  );
}

AllowedCurrenciesComponent.propTypes = {
  currencies: PropTypes.array,
};

export default AllowedCurrenciesComponent;
