/**
*
* ProductDetailsComponent
*
*/

import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

import KeyValueComponent from '../../../components/Version4/KeyValueComponent';
import SidebarHeaderComponent from '../common/SidebarHeaderComponent';

function ProductDetailsComponent() {
  return (
    <div className="content-block">

      <SidebarHeaderComponent title="TF product details" />

      <div className="scroll">
        <form className="no-padding">
          <KeyValueComponent
            label="Level 3: Sub-product"
            value="Export Letter of Transfer"
          />
          <KeyValueComponent
            label="Level 2: Product"
            value="Export LC"
          />
          <KeyValueComponent
            label="Client type"
            value="CORPORATE"
          />
          <KeyValueComponent
            label="Level 1: Client product"
            value="Documentary Trade & Services"
          />
          <KeyValueComponent
            label="Product description:"
            value="Transfer of Export LC from the first beneficiary to second beneficiary."
          />
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
