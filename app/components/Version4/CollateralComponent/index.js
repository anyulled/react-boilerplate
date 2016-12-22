/**
*
* CollateralComponent
*
*/

import React, { PropTypes } from 'react';
import NewDealForm from '../../../components/Version4/NewDealForm';

function CollateralComponent({ title }) {
  return (
    <div className="content-block">
      <h3>{title}</h3>
      <NewDealForm />
    </div>
  );
}

CollateralComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CollateralComponent;
