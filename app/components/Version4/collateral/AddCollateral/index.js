/**
*
* AddCollateral
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

import SidebarHeaderComponent from '../../common/SidebarHeaderComponent';

import AddCollateralStep1 from '../AddCollateralStep1';
import AddCollateralStep2 from '../AddCollateralStep2';
import fakeData from '../fakeData';

function AddCollateral({ showStep2, goBackStep1, showList, addToList, goStep2 }) {
  return (
    <div className="content-block steps">
      <SidebarHeaderComponent title="Add collaterals to the deal" />

      <div className="scroll">
        <AddCollateralStep1
          showStep2={showStep2}
          goBackStep1={goBackStep1}
          addToList={addToList}
          showList={showList}
          collateralList={fakeData.collateral_list}
        />
        <AddCollateralStep2
          showStep2={showStep2}
          selectedCollaterals={fakeData.collateral_list}
          RadioGroupAddDealData={fakeData.RadioGroupAddDeal}
        />
      </div>

      <p className="text-center fixedButtons">
        {!showStep2 &&
          <Button bsStyle="primary" disabled={!showList} onClick={goStep2}>
            Continue
          </Button>
        }

        {showStep2 &&
          <Link to="/">
            <Button bsStyle="primary">
              Finish
            </Button>
          </Link>
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

AddCollateral.propTypes = {
  addToList: PropTypes.func.isRequired,
  goBackStep1: PropTypes.func.isRequired,
  goStep2: PropTypes.func.isRequired,
  showList: PropTypes.bool.isRequired,
  showStep2: PropTypes.bool.isRequired,
};

export default AddCollateral;
