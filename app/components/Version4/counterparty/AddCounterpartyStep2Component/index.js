/**
*
* AddCounterpartyStep2Component
*
*/

import React, { PropTypes } from 'react';
import { Row, FormGroup, ControlLabel, Checkbox } from 'react-bootstrap';

import StepsHeaderComponent from '../../common/StepsHeaderComponent';
import RadioGroupAddDeal from '../../common/RadioGroupAddDeal';

import CounterpartyItemComponent from '../CounterpartyItemComponent';

function AddCounterpartyStep2Component({ showStep2, RadioGroupAddDealData }) {
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
          <RadioGroupAddDeal data={RadioGroupAddDealData} />
        </div>
      </Row>
      }
    </div>
  );
}

AddCounterpartyStep2Component.propTypes = {
  RadioGroupAddDealData: PropTypes.object.isRequired,
  showStep2: PropTypes.bool,
};

export default AddCounterpartyStep2Component;
