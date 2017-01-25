/**
*
* BookingListItemComponent
*
*/

import React, { PropTypes } from 'react';
import { Glyphicon } from 'react-bootstrap';

function BookingListItemComponent({ bookingEntities, viewBookingEntityDetail, children }) {
  const bookingEntityList = bookingEntities.map((item, key) =>
    <li key={key}>
      {item.name} <Glyphicon glyph="chevron-right" onClick={viewBookingEntityDetail} /> <span>({item.place})</span>
    </li>
  );
  return (
    <ul className="booking-entities-list">
      {bookingEntityList}
      {children}
    </ul>
  );
}

BookingListItemComponent.propTypes = {
  bookingEntities: PropTypes.array.isRequired,
  children: PropTypes.object.isRequired,
  viewBookingEntityDetail: PropTypes.func.isRequired,
};

export default BookingListItemComponent;
