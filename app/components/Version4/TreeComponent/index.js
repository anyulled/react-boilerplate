/**
*
* TreeComponent
*
*/

import React, { PropTypes } from 'react';
import TreeItemComponent from '../../../components/Version4/TreeItemComponent';


function TreeComponent({ data, newSubLimit }) {
  return (
    <div className="tree">
      {
        data.getAll().map((category) => {
          const sublimit = category.items.map((item) =>
            <TreeItemComponent key={item.id} title={item.name} newSubLimit={newSubLimit} child />
          );
          return (
            <div key={category.id}>
              <TreeItemComponent title={category.name} newSubLimit={newSubLimit} />
              {sublimit}
            </div>
          );
        })
      }
    </div>
  );
}

TreeComponent.propTypes = {
  data: PropTypes.object.isRequired,
  newSubLimit: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
};

export default TreeComponent;
