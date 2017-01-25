/**
*
* BookingDetails
*
*/

import React, { PropTypes } from 'react';
import { ControlLabel, FormControl, FormGroup, Checkbox, Button } from 'react-bootstrap';

import KeyValueComponent from '../../../../components/Version4/KeyValueComponent';
import PanelItemComponent from '../../../../components/Version4/common/PanelItemComponent';
import fakeData from '../fakeData';

function BookingDetails({ showAccounts, showFacilities, accounts, facilities, addBookingEntity }) {
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
          <FormGroup>
            <Checkbox>Name of the booking system</Checkbox>
          </FormGroup>
          <FormGroup>
            <Checkbox>Name of the booking system</Checkbox>
          </FormGroup>
        </div>
      </FormGroup>
      <hr />

      <FormGroup>
        <ControlLabel>Facility ID (booking system)</ControlLabel>
        <FormControl type="text" className="id-field" />
        <Button bsStyle="info" onClick={showFacilities}>Add to this entity</Button>
        {facilities &&
          <PanelItemComponent arrayList={fakeData.facilities} />
        }
      </FormGroup>
      <hr />

      <FormGroup>
        <ControlLabel>Account ID (booking system)</ControlLabel>
        <FormControl type="text" className="id-field" />
        <Button bsStyle="info" onClick={showAccounts}>Add to this entity</Button>
        {accounts &&
          <PanelItemComponent arrayList={fakeData.accounts} />
        }
      </FormGroup>
      <hr />
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
