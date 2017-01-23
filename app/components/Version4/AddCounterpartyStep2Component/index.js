/**
*
* AddCounterpartyStep2Component
*
*/

import React, { PropTypes } from 'react';
import { Row, FormGroup, ControlLabel, Checkbox } from 'react-bootstrap';

import StepsHeaderComponent from '../../../components/Version4/StepsHeaderComponent';
import CounterpartyItemComponent from '../../../components/Version4/CounterpartyItemComponent';

function AddCounterpartyStep2Component({ showStep2 }) {
  return (
    <div className="step2">
      <StepsHeaderComponent title="Configure limits for the selected counterparties" step={2} />
      {showStep2 &&
      <Row className="row-eq-height counterparties">
        <div className="content-pane pane-2 col-md-6">
          <div className="content-block">
            <form>
              <FormGroup>
                <ControlLabel>Selected counterparties (Mark counterparties to restrict)</ControlLabel>
                <div className="counterparty-list">
                  <FormGroup>
                    <Checkbox inline>
                      <CounterpartyItemComponent title="CLIENTS & OBLIGORS" btnGroup />
                    </Checkbox>

                    <FormGroup>
                      <Checkbox inline>
                        <CounterpartyItemComponent title="GUARANTOR" />
                      </Checkbox>
                    </FormGroup>
                  </FormGroup>

                  <FormGroup>
                    <Checkbox inline>
                      <CounterpartyItemComponent title="CLIENTS" />
                    </Checkbox>

                    <FormGroup>
                      <Checkbox inline>
                        <CounterpartyItemComponent title="GUARANTOR" />
                      </Checkbox>
                    </FormGroup>

                    <FormGroup>
                      <Checkbox inline>
                        <CounterpartyItemComponent title="OBLIGORS" btnGroup />
                      </Checkbox>
                    </FormGroup>

                    <FormGroup>
                      <Checkbox inline>
                        <CounterpartyItemComponent btnGroup />
                      </Checkbox>

                      <FormGroup>
                        <Checkbox inline>
                          <CounterpartyItemComponent title="GUARANTOR" />
                        </Checkbox>
                      </FormGroup>
                    </FormGroup>

                  </FormGroup>

                  <FormGroup>
                    <Checkbox inline>
                      <CounterpartyItemComponent />
                    </Checkbox>
                  </FormGroup>
                </div>
              </FormGroup>
            </form>
          </div>
        </div>

        <div className="content-pane pane-2 col-md-6">
          <div className="content-block">
            <FormGroup>
              <ControlLabel>Choose how to add the selected counterparties to the deal:</ControlLabel>
              <FormGroup>
                <div className="wadk-tickbox">
                  <input type="radio" name="currencies" value="on" />
                  <span className="box-label">
                    No additional restrictions <br />
                    <i>All the selected counterparties will be added in the same deal limit.</i>
                  </span>
                </div>
                <div className="wadk-tickbox">
                  <input type="radio" name="currencies" value="on" />
                  <span className="box-label">
                    Create new sub-limit for all marked counterparties <br />
                    <i>All counterparties will be added and the marked will be included in a new sub-limit.</i>
                  </span>
                </div>
                <div className="wadk-tickbox">
                  <input type="radio" name="currencies" value="on" />
                  <span className="box-label">
                    Create individual sub-limits for each marked counterparties <br />
                    <i>All counterparties will be added and the marked will be included in an individual sub-limit.</i>
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

AddCounterpartyStep2Component.propTypes = {
  showStep2: PropTypes.bool,
};

export default AddCounterpartyStep2Component;
