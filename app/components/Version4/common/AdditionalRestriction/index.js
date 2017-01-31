/**
*
* AdditionalRestriction
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

function AdditionalRestriction({ text1, text2, remove }) {
  return (
    <div>
      <h4 className="text-center">
        {text1}
        <br />
        {text2}
      </h4>

      <p className="text-center">
        <Link to="/">
          <Button bsStyle="primary">Add sub-limit</Button>
        </Link>
        <Link to="/" className="remove-btn">
          {remove}
        </Link>
      </p>
    </div>
  );
}

AdditionalRestriction.propTypes = {
  remove: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};

export default AdditionalRestriction;
