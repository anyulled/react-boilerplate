/**
*
* ProductListItemComponent
*
*/

import React from 'react';
import { Panel } from 'react-bootstrap';

function ProductListItemComponent() {
  return (
    <Panel>
      Level 3 product
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

export default ProductListItemComponent;
