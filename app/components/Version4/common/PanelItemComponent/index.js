/**
*
* PanelItemComponent
*
*/

import React, { PropTypes } from 'react';
import { Panel } from 'react-bootstrap';

function PanelItemComponent({ arrayList }) {
  const elements = arrayList.map((element, key) =>
    <Panel key={key}>
      {element.id}

      {element.description &&
        <span>{element.description}</span>
      }

      <span className="remove">Remove</span>
    </Panel>
  );

  return (
    <div className="panel-list">
      {elements}
    </div>
  );
}

PanelItemComponent.propTypes = {
  arrayList: PropTypes.array,
};

export default PanelItemComponent;
