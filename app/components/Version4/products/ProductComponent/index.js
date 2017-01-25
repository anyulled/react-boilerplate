/**
*
* ProductComponent
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

import NewProductComponent from '../NewProductComponent';

function ProductComponent({ productsAdded, showProductDetails }) {
  return (
    <div className="content-block">
      {!productsAdded &&
        <p className="text-center">No products were added yet.</p>
      }

      {productsAdded &&
        <NewProductComponent showProductDetails={showProductDetails} />
      }

      <p className="text-center">
        <Link to="/addProduct">
          <Button bsStyle="primary">Add product(s)</Button>
        </Link>
      </p>
    </div>
  );
}

ProductComponent.propTypes = {
  productsAdded: PropTypes.bool,
  showProductDetails: PropTypes.func,
};

export default ProductComponent;
