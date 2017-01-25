/**
*
* DealColumnComponent
*
*/

import React, { PropTypes } from 'react';

import ProductComponent from '../products/ProductComponent';

import DealLimitsComponent from '../../../components/Version4/DealLimitsComponent';
import LimitsComponent from '../../../components/Version4/LimitsComponent';
import CounterpartyComponent from '../counterparty/CounterpartyComponent';
import BookingComponent from '../../../components/Version4/booking/BookingComponent';
import CollateralComponent from '../../../components/Version4/CollateralComponent';
import ContactComponent from '../../../components/Version4/ContactComponent';

function DealColumnComponent({ productsAdded, showProductDetails, counterpartyAdded, title }) {
  return (
    <div className="box content-pane pane-2">
      <DealLimitsComponent title={title} />
      <LimitsComponent title="Limits" />
      <ProductComponent
        productsAdded={productsAdded}
        showProductDetails={showProductDetails}
      />
      <CounterpartyComponent
        counterpartyAdded={counterpartyAdded}
        title="Counterparty"
      />
      <BookingComponent title="Booking" />
      <CollateralComponent title="Collateral" />
      <ContactComponent title="Contact" />
    </div>
  );
}

DealColumnComponent.propTypes = {
  counterpartyAdded: PropTypes.bool,
  productsAdded: PropTypes.bool,
  showProductDetails: PropTypes.func,
  title: PropTypes.string,
};

export default DealColumnComponent;
