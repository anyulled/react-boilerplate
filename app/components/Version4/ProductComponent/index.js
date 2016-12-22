/**
*
* ProductComponent
*
*/

import React, { PropTypes } from 'react';
import NewDealForm from '../../../components/Version4/NewDealForm';


function ProductComponent({ title }) {
  return (
    <div className="content-block">
      <h3>{title}</h3>
      <NewDealForm />
    </div>
  );
}

ProductComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ProductComponent;
