/**
*
* ProductDetailsComponent
*
*/

import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

import KeyValueComponent from '../../../components/Version4/KeyValueComponent';
import SidebarHeaderComponent from '../../../components/Version4/SidebarHeaderComponent';

function ProductDetailsComponent({ hideSidebar }) {
  return (
    <div className="content-block">

      <SidebarHeaderComponent title="TF product details" hideSidebar={hideSidebar} />

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
          <Button bsStyle="primary" onClick={hideSidebar}>Add sub-limit</Button>
        </p>
      </div>
      <p className="text-center fixedButtons">
        <Button bsStyle="danger" onClick={hideSidebar}>Remove product from the deal</Button>
      </p>
    </div>
  );
}

ProductDetailsComponent.propTypes = {
  hideSidebar: PropTypes.func.isRequired,
};

export default ProductDetailsComponent;
