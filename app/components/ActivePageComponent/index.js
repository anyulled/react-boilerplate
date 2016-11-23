/**
*
* ActivePageComponent
*
*/

import React from 'react';

class ActivePageComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="active-page">
        Main Data
        <span>(0%)</span>
      </div>
    );
  }
}

export default ActivePageComponent;
