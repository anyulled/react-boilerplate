/**
*
* DealDetailsComponent
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function DealDetailsComponent({ nickname, nicknameHover, description, descriptionHover, documents, documentsHover, editFields }) {
  let shortNickname = '';
  if (nickname.length > 20) {
    shortNickname = `${nickname.substring(0, 20)} ...`;
  } else {
    shortNickname = nickname;
  }

  let shortDescription = '';
  if (description.length > 102) {
    shortDescription = `${description.substring(0, 102)} ...`;
  } else {
    shortDescription = description;
  }

  return (
    <ul className="deal-details">
      <li className={(editFields ? 'edit' : '')}>
        <span>{shortNickname}</span>
        <Link to="/dealHeader">{nicknameHover}</Link>
      </li>
      <li className={(editFields ? 'edit' : '')}>
        <span>{shortDescription}</span>
        <Link to="/dealHeader">{descriptionHover}</Link>
      </li>
      <li className={(editFields ? 'edit' : '')}>
        <span>{documents}</span>
        <Link to="/dealHeader">{documentsHover}</Link>
      </li>
    </ul>
  );
}

DealDetailsComponent.propTypes = {
  nickname: PropTypes.string.isRequired,
  nicknameHover: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  descriptionHover: PropTypes.string.isRequired,
  documents: PropTypes.string.isRequired,
  documentsHover: PropTypes.string.isRequired,
  editFields: PropTypes.bool.isRequired,
};

export default DealDetailsComponent;
