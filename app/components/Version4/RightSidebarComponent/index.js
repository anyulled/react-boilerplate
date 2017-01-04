/**
*
* RightSidebarComponent
*
*/

import React, { PropTypes } from 'react';

function RightSidebarComponent({ children, visible, sidebarClass }) {
  return (
    <div className={`sidebar-content ${sidebarClass} ${visible}`}>
      <div className="mask"></div>
      <div className="right">
        {children}
      </div>
    </div>
  );
}

RightSidebarComponent.propTypes = {
  children: PropTypes.object,
  sidebarClass: PropTypes.string.isRequired,
  visible: PropTypes.string,
};

export default RightSidebarComponent;
