/**
*
* DealDetailsComponent
*
*/

import React, { PropTypes } from 'react';

function DealDetailsComponent({ showSidebar, nickname, nicknameHover, description, descriptionHover, documents, documentsHover, editFields }) {
  // const shortNickname = `${nickname.substring(0, 5)}, ...`;
  // const shortDescription = '';

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
        <button onClick={showSidebar}>{nicknameHover}</button>
      </li>
      <li className={(editFields ? 'edit' : '')}>
        <span>{shortDescription}</span>
        <button onClick={showSidebar}>{descriptionHover}</button>
      </li>
      <li className={(editFields ? 'edit' : '')}>
        <span>{documents}</span>
        <button onClick={showSidebar}>{documentsHover}</button>
      </li>
    </ul>
  );
}

DealDetailsComponent.propTypes = {
  showSidebar: PropTypes.func.isRequired,
  nickname: PropTypes.string.isRequired,
  nicknameHover: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  descriptionHover: PropTypes.string.isRequired,
  documents: PropTypes.string.isRequired,
  documentsHover: PropTypes.string.isRequired,
  editFields: PropTypes.bool.isRequired,
};

export default DealDetailsComponent;
