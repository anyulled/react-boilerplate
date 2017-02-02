/**
*
* ExcludedInvestorsComponent
*
*/
import React, { PropTypes } from 'react';

import InvestorItem from '../InvestorItem';

function ExcludedInvestorsComponent({ children, excludedInvestors }) {
  if ((excludedInvestors) && (excludedInvestors.length > 0)) {
    const investorsItems = excludedInvestors.map((item, key) =>
      <InvestorItem key={key} id={item.id} name={item.name} country={item.country} cr={item.cr} sc={item.sc} />
    );
    return (
      <div className="investor-panel">
        {investorsItems}
        {children}
      </div>
    );
  }
  return (
    <div>
      <p className="text-center">No investors excluded.</p>
      {children}
    </div>
  );
}

ExcludedInvestorsComponent.propTypes = {
  children: PropTypes.object,
  excludedInvestors: PropTypes.array.isRequired,
};

export default ExcludedInvestorsComponent;
