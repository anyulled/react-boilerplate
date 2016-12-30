/**
*
* NotFoundComponent
*
*/

import React from 'react';

function NotFoundComponent() {
  return (
    <div className="not-found">
      <p className="text-center">
        NO MATCH FOUND
      </p>
      <p>
        If the counterparty does not exist, you can leave the reference and replace it with the ID later.
      </p>
      <p>
        You must replace the reference by a valid ID before sending to approval.
      </p>
    </div>
  );
}

export default NotFoundComponent;
