/**
*
* ProductComponent
*
*/

import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

function ProductComponent({ title, showSidebar }) {
  return (
    <div className="content-block">
      <h3>{title}</h3>
      <p className="text-center">No products were added yet.</p>
      <p className="text-center">
        <Button bsStyle="primary" onClick={showSidebar}>Add product(s)</Button>
      </p>
    </div>
  );
}

ProductComponent.propTypes = {
  showSidebar: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export default ProductComponent;
