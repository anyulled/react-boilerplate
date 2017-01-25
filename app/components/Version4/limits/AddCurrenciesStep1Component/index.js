/**
*
* AddCurrenciesStep1Component
*
*/

import React, { PropTypes } from 'react';
import { Row, ControlLabel, FormGroup, Checkbox, Button } from 'react-bootstrap';

import StepsHeaderComponent from '../../common/StepsHeaderComponent';
import PanelItemComponent from '../../common/PanelItemComponent';

function AddCurrenciesStep1Component({ showStep2, goBackStep1, showCurrencies, showSelectedCurrencies, commonCurrencies, currencies }) {
  const commonCurrenciesList = commonCurrencies.map((item, key) =>
    <FormGroup key={key}>
      <Checkbox>{item.id} <span>{item.description}</span></Checkbox>
    </FormGroup>
  );

  const currenciesList = currencies.map((item, key) =>
    <FormGroup key={key}>
      <Checkbox>{item.id} <span>{item.description}</span></Checkbox>
    </FormGroup>
  );

  return (
    <div>
      <StepsHeaderComponent title="Select allowed currencies on the deal" step1 step={1} showStep2={showStep2} goBackStep1={goBackStep1} />
      <Row className={(showStep2) ? 'row-eq-height counterparties hide' : 'row-eq-height counterparties'}>
        <div className="content-pane pane-2 col-md-6">
          <div className="content-block">
            <form>
              <FormGroup>
                <ControlLabel>Elegible currencies <i>(Select one or multiple)</i></ControlLabel>
                <div className="currencies-list">
                  {commonCurrenciesList}
                  <hr />
                  {currenciesList}
                </div>
              </FormGroup>
              <p className="text-center">
                <Button bsStyle="info" onClick={showSelectedCurrencies}>Add to the list</Button>
              </p>
            </form>
          </div>
        </div>
        <div className="content-pane pane-2 col-md-6">
          <div className="content-block">
            <FormGroup>
              <ControlLabel>Selected currencies:</ControlLabel>
              {!showCurrencies &&
                <div className="empty-list">
                  List is empty.<br />
                  Please, select currencies you want to add to the deal.
                </div>
              }

              {showCurrencies &&
                <div className="selected-currencies">
                  <PanelItemComponent arrayList={commonCurrencies} />
                  <PanelItemComponent arrayList={currencies} />
                </div>
              }
            </FormGroup>
          </div>
        </div>
      </Row>
    </div>
  );
}

AddCurrenciesStep1Component.propTypes = {
  commonCurrencies: PropTypes.array.isRequired,
  currencies: PropTypes.array.isRequired,
  goBackStep1: PropTypes.func,
  showCurrencies: PropTypes.bool,
  showSelectedCurrencies: PropTypes.func,
  showStep2: PropTypes.bool,
};

export default AddCurrenciesStep1Component;
