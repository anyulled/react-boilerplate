/**
*
* AddCounterpartyComponent
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

import AddCounterpartyStep1Container from '../../../containers/Version4/AddCounterpartyStep1Container';
import AddCounterpartyStep2Container from '../../../containers/Version4/AddCounterpartyStep2Container';

import SidebarHeaderComponent from '../../../components/Version4/SidebarHeaderComponent';

function AddCounterpartyComponent({ newCounterparty, showStep2, goToStep2, searchItems, showItems, viewCounterparty, counterpartyDetail, notFound, expand, expandDetails, showSelectedProducts, selectedProducts, goBackStep1 }) {
  return (
    <div className="content-block steps">

      <SidebarHeaderComponent title="Add counterparties to the deal" />

      <div className="scroll">
        <AddCounterpartyStep1Container
          showStep2={showStep2}
          searchItems={searchItems}
          showItems={showItems}
          viewCounterparty={viewCounterparty}
          counterpartyDetail={counterpartyDetail}
          notFound={notFound}
          expand={expand}
          expandDetails={expandDetails}
          showSelectedProducts={showSelectedProducts}
          selectedProducts={selectedProducts}
          goBackStep1={goBackStep1}
        />
        <AddCounterpartyStep2Container showStep2={showStep2} />
      </div>

      <p className="text-center fixedButtons">
        {!showStep2 &&
          <Button bsStyle="primary" disabled={!selectedProducts} onClick={goToStep2}>
            Continue
          </Button>
        }

        {showStep2 &&
          <Button bsStyle="primary" onClick={newCounterparty}>
            Finish
          </Button>
        }
        <Link to="/">
          <Button bsStyle="default">Cancel</Button>
        </Link>
      </p>
    </div>
  );
}

AddCounterpartyComponent.propTypes = {
  counterpartyDetail: PropTypes.bool.isRequired,
  expand: PropTypes.bool,
  expandDetails: PropTypes.func,
  goBackStep1: PropTypes.func.isRequired,
  goToStep2: PropTypes.func.isRequired,
  newCounterparty: PropTypes.func.isRequired,
  notFound: PropTypes.bool.isRequired,
  searchItems: PropTypes.func,
  selectedProducts: PropTypes.bool.isRequired,
  showItems: PropTypes.bool,
  showSelectedProducts: PropTypes.func.isRequired,
  showStep2: PropTypes.bool.isRequired,
  viewCounterparty: PropTypes.func,
};

export default AddCounterpartyComponent;
