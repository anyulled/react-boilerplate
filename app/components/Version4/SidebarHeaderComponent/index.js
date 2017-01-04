/**
*
* SidebarHeaderComponent
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Glyphicon } from 'react-bootstrap';

function SidebarHeaderComponent({ title }) {
  return (
    <h3 className="sidebar-header">
      <Link to="/">
        <Glyphicon glyph="remove" />
      </Link>
      {title}
    </h3>
  );
}

SidebarHeaderComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SidebarHeaderComponent;
