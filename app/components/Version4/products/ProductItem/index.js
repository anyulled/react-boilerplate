/**
*
* ProductItem
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Panel } from 'react-bootstrap';

function ProductItem({ level3, level2, level1 }) {
  return (
    <Panel>
      <div className="title">
        {level3}
        <Link to="/productDetail">
          <button className="btn-details">Details</button>
        </Link>
      </div>
      <ul>
        <li>
          {level2}
        </li>
        <li>
          {level1}
        </li>
      </ul>
      <button className="btn-remove">Remove</button>
    </Panel>
  );
}

ProductItem.propTypes = {
  level1: PropTypes.string.isRequired,
  level2: PropTypes.string.isRequired,
  level3: PropTypes.string.isRequired,
};

export default ProductItem;
