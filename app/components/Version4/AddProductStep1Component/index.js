/**
*
* AddProductStep1Component
*
*/

import React, { PropTypes } from 'react';
import { Label, Row, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import ProductListItemComponent from '../../../components/Version4/ProductListItemComponent';

function AddProductStep1Component({ showList, addToList, showStep2, goBackStep1 }) {
  const productItems = [];
  for (let i = 1; i <= 10; i += 1) {
    productItems.push(
      <ProductListItemComponent key={i} />
    );
  }
  return (
    <div>
      <Row>
        <h4 className="col-md-12">
          <Label bsStyle="primary">1</Label>
          <b>Select products to add to the deal</b>
          {showStep2 &&
            <Button bsStyle="info" onClick={goBackStep1}>select more</Button>
          }
        </h4>
      </Row>
      {!showStep2 &&
        <Row className="row-eq-height">
          <div className="content-pane pane-2 col-md-6">
            <div className="content-block">
              <form>
                <FormGroup>
                  <ControlLabel>Level 1: Client product (Select one)</ControlLabel>
                  <FormControl componentClass="select" placeholder="select" size="5">
                    <option>Documentary Trade & Services</option>
                    <option>Guarantees and Standby Letters of Cre</option>
                    <option>Trade Finance Loans</option>
                    <option>Structured Export Finance</option>
                    <option>Structured Commodity Trade Finance</option>
                    <option>Guarantees and Standby Letters of Cre</option>
                  </FormControl>
                </FormGroup>

                <FormGroup>
                  <ControlLabel>Level 2: Product (Select one)</ControlLabel>
                  <FormControl componentClass="select" placeholder="select" size="5">
                    <option>Import LC</option>
                    <option>Export LC</option>
                    <option>LC Reimbursement</option>
                    <option>Documentary Collection</option>
                    <option>Document Management Services</option>
                    <option>Automated Trade Data Matching Service</option>
                  </FormControl>
                </FormGroup>

                <FormGroup>
                  <ControlLabel>Level 3: Sub-product (Select one or multiple)</ControlLabel>
                  <FormControl componentClass="select" multiple size="5">
                    <option>Export LC Advising</option>
                    <option>Export LC Open Confirmation</option>
                    <option>Export LC Silent Confirmation</option>
                    <option>Export Letter of Transfer</option>
                    <option>Export LC Documents presentation without Discount</option>
                    <option>Export LC Sight Discounting Recourse</option>
                  </FormControl>
                </FormGroup>
                <FormGroup className="text-center">
                  <Button bsStyle="info" onClick={addToList}>
                    Add to the list
                  </Button>
                </FormGroup>
              </form>
            </div>
          </div>

          <div className="content-pane pane-2 col-md-6">
            <div className="content-block">
              <form>
                <FormGroup>
                  <ControlLabel>Selected products:</ControlLabel>
                  {!showList &&
                    <div className="empty-list">
                      List is empty.<br />
                      Please, select products you want to add to the deal.
                    </div>
                  }
                  {showList &&
                    <div className="products-list">
                      {productItems}
                    </div>
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

AddProductStep1Component.propTypes = {
  addToList: PropTypes.func.isRequired,
  goBackStep1: PropTypes.func.isRequired,
  showList: PropTypes.bool.isRequired,
  showStep2: PropTypes.bool.isRequired,
};

export default AddProductStep1Component;
