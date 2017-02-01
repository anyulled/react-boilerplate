/**
*
* AddProductStep2Component
*
*/

import React, { PropTypes } from 'react';
import { Row, FormGroup, ControlLabel, Checkbox } from 'react-bootstrap';

import RadioGroupAddDeal from '../../common/RadioGroupAddDeal';
import StepsHeaderComponent from '../../common/StepsHeaderComponent';

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
      <StepsHeaderComponent title="Selected products (Mark products to restrict)" step={2} />
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
