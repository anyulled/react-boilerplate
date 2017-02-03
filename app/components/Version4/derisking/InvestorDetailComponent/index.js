/**
*
* InvestorDetailComponent
*
*/

import React, { PropTypes } from 'react';
import KeyValueComponent from '../../common/KeyValueComponent';

function InvestorDetailComponent({ data }) {
  const generalList = data.general.map((item, key) =>
    <KeyValueComponent key={key} label={item.label} value={item.value} colSize={item.colSize} />
  );

  const legalEntityList = data.legalEntity.map((item, key) =>
    <KeyValueComponent key={key} label={item.label} value={item.value} colSize={item.colSize} />
  );

  const parentList = data.parent.map((item, key) =>
    <KeyValueComponent key={key} label={item.label} value={item.value} colSize={item.colSize} />
  );

  return (
    <div className="investordetail">
      {generalList}

      <h3>
        <small>LEGAL ENTITY</small>
      </h3>

      {legalEntityList}

      <h3>
        <small>PARENT</small>
      </h3>
      {parentList}
    </div>
  );
}

InvestorDetailComponent.propTypes = {
  data: PropTypes.object.isRequired,
};

export default InvestorDetailComponent;
