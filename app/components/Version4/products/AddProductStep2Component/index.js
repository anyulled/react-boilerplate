/**
*
* AddProductStep2Component
*
*/

import React, { PropTypes } from 'react';
import { Label, Row, FormGroup, ControlLabel, Checkbox } from 'react-bootstrap';

import RadioGroupAddDeal from '../../common/RadioGroupAddDeal';

import ProductItem from '../ProductItem';

function AddProductStep2Component({ showStep2, RadioGroupAddDealData, products }) {
  const productsList = products.map((item, key) =>
    <FormGroup key={key}>
      <Checkbox inline>
        <ProductItem
          level3={item.level3}
          level2={item.level2}
          level1={item.level1}
        />
      </Checkbox>
    </FormGroup>
  );
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
                  <div className="product-component">{productsList}</div>
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
  products: PropTypes.array.isRequired,
  showStep2: PropTypes.bool.isRequired,
  RadioGroupAddDealData: PropTypes.object.isRequired,
};

export default AddProductStep2Component;
