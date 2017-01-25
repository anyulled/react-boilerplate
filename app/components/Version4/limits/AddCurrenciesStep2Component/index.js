/**
*
* AddCurrenciesStep2Component
*
*/

import React, { PropTypes } from 'react';
import { Row, FormGroup, ControlLabel, Checkbox } from 'react-bootstrap';

import StepsHeaderComponent from '../../common/StepsHeaderComponent';
import PanelItemComponent from '../../common/PanelItemComponent';
import RadioGroupAddDeal from '../../common/RadioGroupAddDeal';

function AddCurrenciesStep2Component({ showStep2, commonCurrencies, currencies, RadioGroupAddDealData }) {
  const currenciesList = currencies.map((item, key) =>
    <Checkbox key={key}>
      <PanelItemComponent arrayList={[item]} />
    </Checkbox>
  );

  const commonCurrenciesList = commonCurrencies.map((item, key) =>
    <Checkbox key={key}>
      <PanelItemComponent arrayList={[item]} />
    </Checkbox>
  );

  return (
    <div className="step2">
      <StepsHeaderComponent title="Configure limits for the selected currencies" step={2} />
      {showStep2 &&
        <Row className="row-eq-height counterparties">
          <div className="content-pane pane-2 col-md-6">
            <div className="content-block">
              <form>
                <FormGroup>
                  <ControlLabel>Selected currencies <i>(Mark currencies to restrict)</i></ControlLabel>
                  <div className="selected-currencies">
                    {commonCurrenciesList}
                    {currenciesList}
                  </div>
                </FormGroup>
              </form>
            </div>
          </div>
          <div className="content-pane pane-2 col-md-6">
            <RadioGroupAddDeal data={RadioGroupAddDealData} />
          </div>
        </Row>
      }
    </div>

  );
}

AddCurrenciesStep2Component.propTypes = {
  commonCurrencies: PropTypes.array.isRequired,
  currencies: PropTypes.array.isRequired,
  RadioGroupAddDealData: PropTypes.object.isRequired,
  showStep2: PropTypes.bool.isRequired,
};

export default AddCurrenciesStep2Component;
