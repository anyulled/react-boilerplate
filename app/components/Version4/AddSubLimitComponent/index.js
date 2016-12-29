/**
*
* AddSubLimitComponent
*
*/

import React, { PropTypes } from 'react';
import { Col, Button } from 'react-bootstrap';

function AddSubLimitComponent({ showSidebar, sublimit }) {
  return (
    <Col md={3} className={(sublimit) ? 'new-sub-limit col-md-offset-6' : 'new-sub-limit col-md-offset-3'}>
      <div className="content-block">
        <h3 className="text-center">
          Do you need to create <br /> additional restriction on the deal?
        </h3>
        <p className="text-center">
          <Button bsStyle="primary" onClick={showSidebar}>Add sub-limit</Button>
        </p>
      </div>
    </Col>
  );
}

AddSubLimitComponent.propTypes = {
  showSidebar: PropTypes.func,
  sublimit: PropTypes.bool,
};

export default AddSubLimitComponent;
