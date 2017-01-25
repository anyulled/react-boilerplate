/**
*
* BookingComponent
*
*/

import React, { PropTypes } from 'react';

import BookingItemComponent from '../../../components/Version4/BookingItemComponent';

function BookingComponent({ bookingList, children }) {
  if ((bookingList) && (bookingList.length > 0)) {
    const bookingItems = bookingList.map((item, key) =>
      <BookingItemComponent
        key={key}
        title={item.title}
        region={item.region}
        systems={item.systems}
        facilities={item.facilities}
        accounts={item.accounts}
      />
    );
    return (
      <div className="booking-component">
        {bookingItems}
        {children}
      </div>
    );
  }
  return (
    <div className="booking-component">
      <p className="text-center">No bookings entities were added yet.</p>
      {children}
    </div>
  );
}

BookingComponent.propTypes = {
  bookingList: PropTypes.array.isRequired,
  children: PropTypes.object,
};

export default BookingComponent;
