/**
*
* ProductDetailsComponent
*
*/

import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

import KeyValueComponent from '../../common/KeyValueComponent';
import SidebarHeaderComponent from '../../common/SidebarHeaderComponent';
import fakeData from '../fakeData';

function ProductDetailsComponent() {
  const detailsList = fakeData.productDetails.map((item, key) =>
    <KeyValueComponent
      key={key}
      label={item.label}
      value={item.value}
    />
  );
  return (
    <div className="content-block">

      <SidebarHeaderComponent title="TF product details" />

      <div className="scroll">
        <form className="no-padding">
          {detailsList}
        </form>

        <h4 className="text-center">
          Do you need to create<br />
          additional restriction on this product?
        </h4>

        <p className="text-center">
          <Link to="/">
            <Button bsStyle="primary">Add sub-limit</Button>
          </Link>
        </p>
      </div>
      <p className="text-center fixedButtons">
        <Link to="/">
          <Button bsStyle="danger">Remove product from the deal</Button>
        </Link>
      </p>
    </div>
  );
}

export default ProductDetailsComponent;
