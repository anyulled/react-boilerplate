/**
*
* NotFoundComponent
*
*/

import React, { PropTypes } from 'react';

function NotFoundComponent({ text1, text2 }) {
  return (
    <div className="not-found">
      <p className="text-center">
        NO MATCH FOUND
      </p>
      <p>
        {text1}
      </p>
      <p>
        {text2}
      </p>
    </div>
  );
}

NotFoundComponent.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string,
};

export default NotFoundComponent;
