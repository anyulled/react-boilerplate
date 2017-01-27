/**
*
* CollateralComponent
*
*/

import React, { PropTypes } from 'react';

import CollateralItem from '../CollateralItem';

function CollateralComponent({ children, collateralList }) {
  if ((collateralList) && (collateralList.length > 0)) {
    const collateralItems = collateralList.map((item, key) =>
      <CollateralItem
        key={key}
        value1={item.value1}
        value2={item.value2}
        share={item.share}
        description={item.description}
      />
    );
    return (
      <div className="collateral-component">
        {collateralItems}
        {children}
      </div>
    );
  }
  return (
    <div className="collateral-component">
      <p className="text-center">No collaterals were added yet.</p>
      {children}
    </div>
  );
}

CollateralComponent.propTypes = {
  children: PropTypes.object,
  collateralList: PropTypes.array.isRequired,
};

export default CollateralComponent;
