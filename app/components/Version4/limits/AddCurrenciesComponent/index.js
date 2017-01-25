/**
*
* AddCurrenciesComponent
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

import SidebarHeaderComponent from '../../common/SidebarHeaderComponent';

import AddCurrenciesStep1Component from '../AddCurrenciesStep1Component';
import AddCurrenciesStep2Component from '../AddCurrenciesStep2Component';
import fakeData from '../fakeData';

function AddCurrenciesComponent({ showStep2, showCurrencies, showSelectedCurrencies, goBackStep1, goToStep2 }) {
  return (
    <div className="content-block steps">
      <SidebarHeaderComponent title="Add allowed currencies to the deal" />

      <div className="scroll">
        <AddCurrenciesStep1Component
          showCurrencies={showCurrencies}
          showSelectedCurrencies={showSelectedCurrencies}
          showStep2={showStep2}
          goBackStep1={goBackStep1}
          commonCurrencies={fakeData.commonCurrencies}
          currencies={fakeData.currencies}
        />

        <AddCurrenciesStep2Component
          commonCurrencies={fakeData.commonCurrencies}
          currencies={fakeData.currencies}
          showStep2={showStep2}
          RadioGroupAddDealData={fakeData.RadioGroupAddDeal}
        />
      </div>

      <p className="text-center fixedButtons">
        {!showStep2 &&
          <Button bsStyle="primary" disabled={!showCurrencies} onClick={goToStep2}>
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
          <Button bsStyle="default">Cancel</Button>
        </Link>
      </p>
    </div>
  );
}

AddCurrenciesComponent.propTypes = {
  goBackStep1: PropTypes.func.isRequired,
  goToStep2: PropTypes.func.isRequired,
  showCurrencies: PropTypes.bool.isRequired,
  showSelectedCurrencies: PropTypes.func.isRequired,
  showStep2: PropTypes.bool.isRequired,
};

export default AddCurrenciesComponent;
