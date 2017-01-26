/**
*
* ProductComponent
*
*/

import React, { PropTypes } from 'react';

import ProductItem from '../ProductItem';

function ProductComponent({ children, products }) {
  if ((products) && (products.length > 0)) {
    const productsItems = products.map((item, key) =>
      <ProductItem
        key={key}
        level3={item.level3}
        level2={item.level2}
        level1={item.level1}
      />
    );
    return (
      <div className="product-component">
        {productsItems}
        {children}
      </div>
    );
  }
  return (
    <div className="product-component">
      <p className="text-center">No products were added yet.</p>
      {children}
    </div>
  );
}

ProductComponent.propTypes = {
  children: PropTypes.object,
  products: PropTypes.array.isRequired,
};

export default ProductComponent;
