/**
*
* DealLimitsComponent
*
*/

import React, { PropTypes } from 'react';
import NewDealForm from '../../../components/Version4/NewDealForm';
import { Glyphicon } from 'react-bootstrap';

function DealLimitsComponent({ title, draft }) {
  return (
    <div>
      <div className="top-toolbar">
        <h3>
          {title} <Glyphicon glyph="align-justify" />
        </h3>
      </div>
      <div className="content-block">
        <NewDealForm draft={draft} />
      </div>
    </div>
  );
}

DealLimitsComponent.propTypes = {
  draft: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default DealLimitsComponent;
