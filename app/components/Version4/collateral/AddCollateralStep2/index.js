/**
*
* AddCollateralStep2
*
*/

import React, { PropTypes } from 'react';
import { Row, FormGroup, ControlLabel, Checkbox } from 'react-bootstrap';

import StepsHeaderComponent from '../../common/StepsHeaderComponent';
import RadioGroupAddDeal from '../../common/RadioGroupAddDeal';

import CollateralItem from '../CollateralItem';

function AddCollateralStep2({ showStep2, RadioGroupAddDealData, selectedCollaterals }) {
  const colllateralList = selectedCollaterals.map((item, key) =>
    <FormGroup key={key}>
      <Checkbox inline>
        <CollateralItem
          key={key}
          value1={item.value1}
          value2={item.value2}
          share={item.share}
          description={item.description}
        />
      </Checkbox>
    </FormGroup>
  );
  return (
    <div className="step2">
      <StepsHeaderComponent title="Configure limits for the selected collaterals" step={2} />
      {showStep2 &&
        <Row className="row-eq-height">
          <div className="content-pane pane-2 col-md-6">
            <div className="content-block">
              <form>
                <FormGroup>
                  <ControlLabel>List of collaterals (Mark collaterals to restrict)</ControlLabel>
                  <div className="collateral-component">{colllateralList}</div>
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

AddCollateralStep2.propTypes = {
  selectedCollaterals: PropTypes.array.isRequired,
  RadioGroupAddDealData: PropTypes.object.isRequired,
  showStep2: PropTypes.bool.isRequired,
};

export default AddCollateralStep2;
