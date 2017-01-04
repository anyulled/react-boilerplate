/**
*
* AddSubLimitComponent
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

function AddSubLimitComponent({ sublimit }) {
  return (
    <div className={(sublimit) ? 'box new-sub-limit extra-space' : 'box new-sub-limit'}>
      <div className="content-block">
        <h3 className="text-center">
          Do you need to create <br /> additional restriction on the deal?
        </h3>
        <p className="text-center">
          <Link to="/addSubmlimit">
            <Button bsStyle="primary">Add sub-limit</Button>
          </Link>
        </p>
      </div>
    </div>
  );
}

AddSubLimitComponent.propTypes = {
  sublimit: PropTypes.bool,
};

export default AddSubLimitComponent;
