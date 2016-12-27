/**
*
* AddProductStep2Component
*
*/

import React, { PropTypes } from 'react';
import { Label, Row, FormGroup, ControlLabel, Checkbox } from 'react-bootstrap';

import ProductListItemComponent from '../../../components/Version4/ProductListItemComponent';

function AddProductStep2Component({ showStep2 }) {
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
            <div className="content-block">
              <form>
                <FormGroup>
                  <ControlLabel>Choose how to add the selected products to the deal:</ControlLabel>
                  <FormGroup>
                    <div className="wadk-tickbox">
                      <input type="radio" name="teamColors2" value="on" />
                      <span className="box-label">
                        No additional restrictions <br />
                        <i>All the selected products will be added in the same deal limit.</i>
                      </span>
                    </div>
                    <div className="wadk-tickbox">
                      <input type="radio" name="teamColors2" value="on" />
                      <span className="box-label">
                        Create new sub-limit for all marked products <br />
                        <i>All products will be added and the marked will be included in a new sub-limit.</i>
                      </span>
                    </div>
                    <div className="wadk-tickbox">
                      <input type="radio" name="teamColors2" value="on" />
                      <span className="box-label">
                        Create individual sub-limits for each marked product <br />
                        <i>All products will be added and the marked will be included in an individual sub-limit.</i>
                      </span>
                    </div>
                  </FormGroup>
                </FormGroup>
              </form>
            </div>
          </div>
        </Row>
      }
    </div>
  );
}

AddProductStep2Component.propTypes = {
  showStep2: PropTypes.bool.isRequired,
};

export default AddProductStep2Component;
