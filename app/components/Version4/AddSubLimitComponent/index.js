/**
*
* AddSubLimitComponent
*
*/

import React, { PropTypes } from 'react';
import { Col, Button } from 'react-bootstrap';

function AddSubLimitComponent({ showSidebar, sublimit }) {
  return (
    <div className={(sublimit) ? 'box new-sub-limit extra-space' : 'box new-sub-limit'}>
      <div className="content-block">
        <h3 className="text-center">
          Do you need to create <br /> additional restriction on the deal?
        </h3>
        <p className="text-center">
          <Button bsStyle="primary" onClick={showSidebar}>Add sub-limit</Button>
        </p>
      </div>
    </div>
  );
}

AddSubLimitComponent.propTypes = {
  showSidebar: PropTypes.func,
  sublimit: PropTypes.bool,
};

export default AddSubLimitComponent;
