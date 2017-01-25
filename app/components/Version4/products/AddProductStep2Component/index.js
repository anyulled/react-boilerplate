/**
*
* AddProductStep2Component
*
*/

import React, { PropTypes } from 'react';
import { Label, Row, FormGroup, ControlLabel, Checkbox } from 'react-bootstrap';

import ProductListItemComponent from '../ProductListItemComponent';

import RadioGroupAddDeal from '../../common/RadioGroupAddDeal';

function AddProductStep2Component({ showStep2, RadioGroupAddDealData }) {
  const selectedProducts = [];
  for (let i = 1; i <= 10; i += 1) {
    selectedProducts.push(
      <FormGroup key={i}>
        <Checkbox inline>
          <ProductListItemComponent />
        </Checkbox>
      </FormGroup>
    );
  }
  return (
    <div className="step2">
      <Row>
        <h4 className="col-md-12">
          <Label bsStyle="primary">2</Label>
          <b>Selected products (Mark products to restrict)</b>
        </h4>
      </Row>
      {showStep2 &&
        <Row className="row-eq-height">
          <div className="content-pane pane-2 col-md-6">
            <div className="content-block">
              <form>
                <FormGroup>
                  <ControlLabel>Selected products (Mark products to restrict)</ControlLabel>
                  <div className="selected-products">{selectedProducts}</div>
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

AddProductStep2Component.propTypes = {
  showStep2: PropTypes.bool.isRequired,
  RadioGroupAddDealData: PropTypes.object.isRequired,
};

export default AddProductStep2Component;
