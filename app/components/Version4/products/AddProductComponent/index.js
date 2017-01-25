/**
*
* AddProductComponent
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

import SidebarHeaderComponent from '../../common/SidebarHeaderComponent';

import AddProductStep1Component from '../AddProductStep1Component';
import AddProductStep2Component from '../AddProductStep2Component';
import fakeData from '../fakeData';

function AddProductComponent({ showList, addToList, goStep2, showStep2, goBackStep1, newProduct }) {
  return (
    <div className="content-block steps">

      <SidebarHeaderComponent title="Add TF allowed products to the deal" />

      <div className="scroll">
        <AddProductStep1Component
          showList={showList}
          addToList={addToList}
          showStep2={showStep2}
          goBackStep1={goBackStep1}
          levelData={fakeData}
        />

        <AddProductStep2Component showStep2={showStep2} RadioGroupAddDealData={fakeData.RadioGroupAddDeal} />
      </div>
      <p className="text-center fixedButtons">
        {!showStep2 &&
          <Button bsStyle="primary" disabled={!showList} onClick={goStep2}>
            Continue
          </Button>
        }

        {showStep2 &&
          <Button bsStyle="primary" onClick={newProduct}>
            Finish
          </Button>
        }

        <Link to="/">
          <Button bsStyle="default">
            Cancel
          </Button>
        </Link>
      </p>
    </div>
  );
}

AddProductComponent.propTypes = {
  addToList: PropTypes.func.isRequired,
  goBackStep1: PropTypes.func.isRequired,
  goStep2: PropTypes.func.isRequired,
  newProduct: PropTypes.func.isRequired,
  showList: PropTypes.bool.isRequired,
  showStep2: PropTypes.bool.isRequired,
};

export default AddProductComponent;
