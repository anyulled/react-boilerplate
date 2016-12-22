/**
*
* TreeComponent
*
*/

import React, { PropTypes } from 'react';
import TreeItemComponent from '../../../components/Version4/TreeItemComponent';

function TreeComponent({ newSubLimit }) {
  return (
    <div className="tree">
      <TreeItemComponent title="Deal limit" newSubLimit={newSubLimit} />
      <TreeItemComponent
        title="Name of one existing sub-limit"
        child
        newSubLimit={newSubLimit}
      />
    </div>
  );
}

TreeComponent.propTypes = {
  newSubLimit: PropTypes.func.isRequired,
};

export default TreeComponent;
