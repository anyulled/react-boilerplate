/**
*
* DealDetailsComponent
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function DealDetailsComponent({ dealInformations }) {
  let shortString = '';
  const fieldsList = dealInformations.fields.map((item, key) => {
    if ((key === 0) && (item.value.length > 20)) {
      shortString = `${item.value.substring(0, 20)} ...`;
      return (
        <li key={key} className={(dealInformations.editFields ? 'edit' : '')}>
          <span>{shortString}</span>
          <Link to="/dealHeader">{item.hover}</Link>
        </li>
      );
    } else if ((key === 1) && (item.value.length > 102)) {
      shortString = `${item.value.substring(0, 102)} ...`;
      return (
        <li key={key} className={(dealInformations.editFields ? 'edit' : '')}>
          <span>{shortString}</span>
          <Link to="/dealHeader">{item.hover}</Link>
        </li>
      );
    }
    return (
      <li key={key} className={(dealInformations.editFields ? 'edit' : '')}>
        <span>{item.value}</span>
        <Link to="/dealHeader">{item.hover}</Link>
      </li>
    );
  });

  return (
    <ul className="deal-details">
      {fieldsList}
    </ul>
  );
}

DealDetailsComponent.propTypes = {
  dealInformations: PropTypes.object.isRequired,
};

export default DealDetailsComponent;
