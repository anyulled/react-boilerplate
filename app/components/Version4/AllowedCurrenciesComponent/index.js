/**
*
* AllowedCurrenciesComponent
*
*/

import React, { PropTypes } from 'react';
import { Panel } from 'react-bootstrap';

function AllowedCurrenciesComponent({ currencies }) {
  const listCurrencies = currencies.map((item, key) =>
    <Panel key={key}>
      {item.currency} <span>{item.description}</span> <button className="remove">Remove</button>
    </Panel>
  );

  return (
    <div className="allowed-currencies">
      {listCurrencies}
    </div>
  );
}

AllowedCurrenciesComponent.propTypes = {
  currencies: PropTypes.array,
};

export default AllowedCurrenciesComponent;
