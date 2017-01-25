/**
*
* AddProductStep1Component
*
*/

import React, { PropTypes } from 'react';
import { Row, FormGroup, ControlLabel, Button } from 'react-bootstrap';

import ProductListItemComponent from '../ProductListItemComponent';

import MultiSelectField from '../../common/MultiSelectField';
import StepsHeaderComponent from '../../common/StepsHeaderComponent';

function AddProductStep1Component({ showList, addToList, showStep2, goBackStep1, levelData }) {
  const productItems = [];
  for (let i = 1; i <= 10; i += 1) {
    productItems.push(
      <ProductListItemComponent key={i} />
    );
  }
  return (
    <div>
      <StepsHeaderComponent title="Select products to add to the deal" step1 step={1} showStep2={showStep2} goBackStep1={goBackStep1} />
      {!showStep2 &&
        <Row className="row-eq-height">
          <div className="content-pane pane-2 col-md-6">
            <div className="content-block">
              <form>
                <MultiSelectField data={levelData.level1} />
                <MultiSelectField data={levelData.level2} />
                <MultiSelectField data={levelData.level3} />
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
  levelData: PropTypes.object.isRequired,
  showList: PropTypes.bool.isRequired,
  showStep2: PropTypes.bool.isRequired,
};

export default AddProductStep1Component;
