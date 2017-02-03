/**
*
* CounterpartyDetailComponent
*
*/

import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

import KeyValueComponent from '../../common/KeyValueComponent';

function CounterpartyDetailComponent({ showExpandButton, showAddToTheListButton, expand, expandDetails, showSelectedProducts, data, children }) {
  let expandButtonLabel;
  if (showExpandButton) {
    if (expand) {
      expandButtonLabel = 'Collapse details';
    } else {
      expandButtonLabel = 'Expand details';
    }
  }

  const generalList = data.general.map((item, key) =>
    <KeyValueComponent key={key} label={item.label} value={item.value} colSize={item.colSize} />
  );

  const legalEntityList = data.legalEntity.map((item, key) =>
    <KeyValueComponent key={key} label={item.label} value={item.value} colSize={item.colSize} />
  );

  const parentList = data.parent.map((item, key) =>
    <KeyValueComponent key={key} label={item.label} value={item.value} colSize={item.colSize} />
  );

  return (
    <div className={(expand) ? 'expanded' : ''}>
      <div className="no-padding counterparty-detail">
        {generalList}

        <h3>
          <small>LEGAL ENTITY</small>
        </h3>

        {legalEntityList}

        <h3>
          <small>PARENT</small>
        </h3>
        {parentList}
      </div>

      { showExpandButton &&
        <div>
          <p className="text-center">
            <Button bsStyle="info" onClick={expandDetails}>
              {expandButtonLabel}
            </Button>
          </p>

          <hr />
        </div>
      }

      {children}

      { showAddToTheListButton &&
        <p className="text-center">
          <Button bsStyle="primary" onClick={showSelectedProducts}>Add to the list</Button>
        </p>
      }
    </div>
  );
}

CounterpartyDetailComponent.propTypes = {
  children: PropTypes.object,
  data: PropTypes.object.isRequired,
  expand: PropTypes.bool,
  expandDetails: PropTypes.func,
  showSelectedProducts: PropTypes.func.isRequired,
  showExpandButton: PropTypes.bool,
  showAddToTheListButton: PropTypes.bool,
};

export default CounterpartyDetailComponent;
