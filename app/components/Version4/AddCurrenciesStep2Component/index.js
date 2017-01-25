/**
*
* AddCurrenciesStep2Component
*
*/

import React, { PropTypes } from 'react';
import { Row, FormGroup, ControlLabel, Checkbox } from 'react-bootstrap';

import StepsHeaderComponent from '../../../components/Version4/StepsHeaderComponent';
import PanelItemComponent from '../../../components/Version4/common/PanelItemComponent';

function AddCurrenciesStep2Component({ showStep2, commonCurrencies, currencies }) {
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
            <div className="content-block">
              <FormGroup>
                <ControlLabel>Choose how to add the currencies to the deal:</ControlLabel>
                <FormGroup>
                  <div className="wadk-tickbox">
                    <input type="radio" name="currencies" value="on" />
                    <span className="box-label">
                      No additional restrictions <br />
                      <i>All the selected currencies will be added in the same deal limit.</i>
                    </span>
                  </div>
                  <div className="wadk-tickbox">
                    <input type="radio" name="currencies" value="on" />
                    <span className="box-label">
                      Create new sub-limit for all marked currencies <br />
                      <i>All currencies will be added and the marked will be included in a new sub-limit.</i>
                    </span>
                  </div>
                  <div className="wadk-tickbox">
                    <input type="radio" name="currencies" value="on" />
                    <span className="box-label">
                      Create individual sub-limits for each marked currencies <br />
                      <i>All currencies will be added and the marked will be included in an individual sub-limit.</i>
                    </span>
                  </div>
                </FormGroup>
              </FormGroup>
            </div>
          </div>
        </Row>
      }
    </div>

  );
}

AddCurrenciesStep2Component.propTypes = {
  commonCurrencies: PropTypes.array.isRequired,
  currencies: PropTypes.array.isRequired,
  showStep2: PropTypes.bool.isRequired,
};

export default AddCurrenciesStep2Component;
