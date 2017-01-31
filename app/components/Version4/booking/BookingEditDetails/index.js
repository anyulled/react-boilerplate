/**
*
* BookingEditDetails
*
*/

import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

import KeyValueComponent from '../../common/KeyValueComponent';
import SidebarHeaderComponent from '../../common/SidebarHeaderComponent';
import AdditionalRestriction from '../../common/AdditionalRestriction';

import BookingDetails from '../BookingDetails';

function showAccounts() {
}

function showFacilities() {
}

function BookingEditDetails() {
  return (
    <div className="content-block">
      <SidebarHeaderComponent title="Booking entity details" />
      <div className="no-padding">
        <KeyValueComponent
          label="Booking entity"
          value="Deutsche Bank AG (Frankfurt, GERMANY)"
        />
      </div>
      <BookingDetails accounts facilities showAccounts={showAccounts} showFacilities={showFacilities} />
      <AdditionalRestriction
        text1="Do you need to create"
        text2="additional restriction on this booking entity?"
        remove="Remove booking entity from the deal"
      />
      <p className="text-center fixedButtons">
        <Link to="/">
          <Button bsStyle="primary">Update</Button>
        </Link>

        <Link to="/">
          <Button bsStyle="default">Cancel</Button>
        </Link>
      </p>
    </div>
  );
}

export default BookingEditDetails;
