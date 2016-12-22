/**
*
* TreeItemComponent
*
*/

import React, { PropTypes } from 'react';
import { Panel } from 'react-bootstrap';

function TreeItemComponent({ title, child, newSubLimit }) {
  return (
    <Panel className={(child) ? 'child' : ''}>
      {title}
      <button onClick={newSubLimit}>
        Select
      </button>
    </Panel>
  );
}

TreeItemComponent.propTypes = {
  child: PropTypes.bool,
  newSubLimit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default TreeItemComponent;
