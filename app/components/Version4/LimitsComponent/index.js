/**
*
* LimitsComponent
*
*/

import React, { PropTypes } from 'react';
import NewDealForm from '../../../components/Version4/NewDealForm';

function LimitsComponent({ title }) {
  return (
    <div className="content-block">
      <h3>{title}</h3>
      <NewDealForm />
    </div>
  );
}

LimitsComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LimitsComponent;
