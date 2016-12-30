/**
*
* SidebarHeaderComponent
*
*/

import React, { PropTypes } from 'react';
import { Glyphicon } from 'react-bootstrap';

function SidebarHeaderComponent({ hideSidebar, title }) {
  return (
    <h3>
      <Glyphicon glyph="remove" onClick={hideSidebar} />
      {title}
    </h3>
  );
}

SidebarHeaderComponent.propTypes = {
  hideSidebar: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default SidebarHeaderComponent;
