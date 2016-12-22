/**
*
* BookingComponent
*
*/

import React, { PropTypes } from 'react';
import NewDealForm from '../../../components/Version4/NewDealForm';

function BookingComponent({ title }) {
  return (
    <div className="content-block">
      <h3>{title}</h3>
      <NewDealForm />
    </div>
  );
}

BookingComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BookingComponent;
