/**
*
* ProductComponent
*
*/

import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

import NewProductComponent from '../../../components/Version4/NewProductComponent';

function ProductComponent({ title, showSidebar, productsAdded, showProductDetails }) {
  return (
    <div className="content-block">
      <h3>{title}</h3>

      {!productsAdded &&
        <p className="text-center">No products were added yet.</p>
      }

      {productsAdded &&
        <NewProductComponent showProductDetails={showProductDetails} />
      }

      <p className="text-center">
        <Button bsStyle="primary" onClick={showSidebar}>Add product(s)</Button>
      </p>
    </div>
  );
}

ProductComponent.propTypes = {
  productsAdded: PropTypes.bool.isRequired,
  showProductDetails: PropTypes.func,
  showSidebar: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export default ProductComponent;
