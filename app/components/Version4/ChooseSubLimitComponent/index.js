/**
*
* ChooseSubLimitComponent
*
*/

import React, { PropTypes } from 'react';
import { Glyphicon } from 'react-bootstrap';

import TreeComponent from '../../../components/Version4/TreeComponent';

function ChooseSubLimitComponent({ hideSidebar, newSubLimit }) {
  return (
    <div className="content-block">
      <h3>
        <Glyphicon glyph="remove" onClick={hideSidebar} />
        Add sub-limit to restrict the deal
      </h3>
      <p>Please, select a deal or sub-limit from where you want to restrict the deal:</p>
      <TreeComponent newSubLimit={newSubLimit} />
    </div>
  );
}

ChooseSubLimitComponent.propTypes = {
  hideSidebar: PropTypes.func.isRequired,
  newSubLimit: PropTypes.func.isRequired,
}

export default ChooseSubLimitComponent;
