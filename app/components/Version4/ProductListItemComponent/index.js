/**
*
* ProductListItemComponent
*
*/

import React, { PropTypes } from 'react';
import { Panel } from 'react-bootstrap';

function ProductListItemComponent({ showProductDetails }) {
  return (
    <Panel>
      Level 3 product <button onClick={showProductDetails}>Details</button>
      <ul>
        <li>
          Level 2 product
        </li>
        <li>
          Level 1 product
        </li>
        <li>
          Remove
        </li>
      </ul>
    </Panel>
  );
}

ProductListItemComponent.propTypes = {
  showProductDetails: PropTypes.func,
};

export default ProductListItemComponent;
