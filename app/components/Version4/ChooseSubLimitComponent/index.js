/**
*
* ChooseSubLimitComponent
*
*/

import React, { PropTypes } from 'react';
import { Glyphicon, Button } from 'react-bootstrap';

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
      <p className="text-center fixedButtons">
        <Button bsStyle="default" onClick={hideSidebar}>Cancel</Button>
      </p>
    </div>
  );
}

ChooseSubLimitComponent.propTypes = {
  hideSidebar: PropTypes.func.isRequired,
  newSubLimit: PropTypes.func.isRequired,
};

export default ChooseSubLimitComponent;
