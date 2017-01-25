/**
*
* BookingDetails
*
*/

import React, { PropTypes } from 'react';
import { ControlLabel, FormGroup, Checkbox, Button } from 'react-bootstrap';

import KeyValueComponent from '../../../../components/Version4/KeyValueComponent';
import PanelItemComponent from '../../../../components/Version4/common/PanelItemComponent';
import fakeData from '../fakeData';
import AddEntity from '../AddEntity';

function BookingDetails({ showAccounts, showFacilities, accounts, facilities, addBookingEntity }) {
  const systemsList = fakeData.systems.map((item, key) =>
    <FormGroup key={key}>
      <Checkbox>{item.id}</Checkbox>
    </FormGroup>
  );

  return (
    <form className="booking-detail">
      <KeyValueComponent
        label="Entity region"
        value="Automatically provided when entity is chosen"
      />
      <hr />

      <FormGroup>
        <ControlLabel>System <i>(Select one or multiple)</i></ControlLabel>
        <div className="system-list">
          {systemsList}
        </div>
      </FormGroup>
      <hr />

      <AddEntity label="Facility ID (booking system)" clickFunction={showFacilities}>
        {facilities &&
          <PanelItemComponent arrayList={fakeData.facilities} />
        }
      </AddEntity>

      <AddEntity label="Account ID (booking system)" clickFunction={showAccounts}>
        {accounts &&
          <PanelItemComponent arrayList={fakeData.accounts} />
        }
      </AddEntity>

      <p className="text-center">
        <Button bsStyle="info" onClick={addBookingEntity}>Add to the list</Button>
      </p>
    </form>
  );
}

BookingDetails.propTypes = {
  accounts: PropTypes.bool.isRequired,
  addBookingEntity: PropTypes.func.isRequired,
  facilities: PropTypes.bool.isRequired,
  showAccounts: PropTypes.func.isRequired,
  showFacilities: PropTypes.func.isRequired,
};

export default BookingDetails;
