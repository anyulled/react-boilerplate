/**
*
* AddCollateralStep1
*
*/

import React, { PropTypes } from 'react';
import { Row, FormGroup, ControlLabel, Button, FormControl } from 'react-bootstrap';

import StepsHeaderComponent from '../../common/StepsHeaderComponent';

import CollateralComponent from '../CollateralComponent';

function AddCollateralStep1({ showStep2, goBackStep1, showList, addToList, collateralList }) {
  return (
    <div>
      <StepsHeaderComponent title="Select products to add to the deal" step1 step={1} showStep2={showStep2} goBackStep1={goBackStep1} />
      {!showStep2 &&
        <Row className="row-eq-height add-collateral">
          <div className="content-pane pane-2 col-md-6">
            <div className="content-block">
              <form>
                <FormGroup>
                  <b>Collateral held at DB</b>
                </FormGroup>

                <Row>
                  <FormGroup className="col-md-6">
                    <ControlLabel>Collateral held at DB</ControlLabel>
                    <FormControl type="text" />
                  </FormGroup>

                  <FormGroup className="col-md-6">
                    <ControlLabel>Currency</ControlLabel>
                    <FormControl componentClass="select" placeholder="Currency">
                      <option value="select">USD (default)</option>
                      <option value="other">...</option>
                    </FormControl>
                  </FormGroup>

                  <FormGroup className="col-md-6 text-right">
                    <b>xx,xxx,xxx.xx €</b>
                  </FormGroup>

                  <FormGroup className="col-md-12 text-center">
                    <b>100%</b> (share of the public hold)
                  </FormGroup>

                  <FormGroup className="col-md-12">
                    <ControlLabel>Description</ControlLabel>
                    <FormControl componentClass="textarea" />
                  </FormGroup>
                </Row>

                <p className="text-center">
                  <Button bsStyle="info" onClick={addToList}>
                    Add to the list
                  </Button>
                </p>
              </form>
            </div>
          </div>
          <div className="content-pane pane-2 col-md-6">
            <div className="content-block">
              <form>
                <FormGroup>
                  <ControlLabel>List of collaterals:</ControlLabel>
                  {!showList &&
                    <div className="empty-list">
                      List is empty.
                    </div>
                  }

                  {showList &&
                    <CollateralComponent collateralList={collateralList} />
                  }
                </FormGroup>
              </form>
            </div>
          </div>
        </Row>
      }
    </div>
  );
}

AddCollateralStep1.propTypes = {
  addToList: PropTypes.func.isRequired,
  collateralList: PropTypes.array.isRequired,
  goBackStep1: PropTypes.func.isRequired,
  showList: PropTypes.bool.isRequired,
  showStep2: PropTypes.bool.isRequired,
};

export default AddCollateralStep1;
