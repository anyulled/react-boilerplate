/**
*
* SearchList
*
*/

import React, { PropTypes } from 'react';
import { Glyphicon } from 'react-bootstrap';

function SearchList({ list, clickFunction }) {
  let shortString = '';
  const searchList = list.map((item, key) => {
    if (item.name.length > 45) {
      shortString = `${item.name.substring(0, 45)} ...`;
    } else {
      shortString = item.name;
    }
    return (
      <li key={key}>
        <span className="paragon-id">{item.paragonID}</span>
        <span>{shortString}</span>
        <Glyphicon glyph="chevron-right" onClick={clickFunction} />
      </li>
    );
  });

  return (
    <div>
      <ul className="search-list">
        {searchList}
      </ul>
      <a className="text-center load-more">Load (05) more</a>
    </div>
  );
}

SearchList.propTypes = {
  clickFunction: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
};

export default SearchList;
