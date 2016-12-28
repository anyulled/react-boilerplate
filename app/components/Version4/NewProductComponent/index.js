/**
*
* NewProductComponent
*
*/

import React, { PropTypes } from 'react';

import ProductListItemComponent from '../../../components/Version4/ProductListItemComponent';

function NewProductComponent({ showProductDetails }) {
  const productItems = [];
  for (let i = 1; i <= 3; i += 1) {
    productItems.push(
      <ProductListItemComponent key={i} showProductDetails={showProductDetails} />
    );
  }
  return (
    <div className="new-products-list">
      {productItems}
    </div>
  );
}

NewProductComponent.propTypes = {
  showProductDetails: PropTypes.func,
};

export default NewProductComponent;
