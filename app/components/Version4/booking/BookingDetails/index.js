/**
*
* BookingDetails
*
*/

import React, { PropTypes } from 'react';
import { ControlLabel, FormGroup, Checkbox } from 'react-bootstrap';

import KeyValueComponent from '../../common/KeyValueComponent';
import PanelItemComponent from '../../common/PanelItemComponent';
import fakeData from '../fakeData';
import AddEntity from '../AddEntity';

function BookingDetails({ showAccounts, showFacilities, accounts, facilities, children }) {
  const systemsList = fakeData.systems.map((item, key) =>
    <FormGroup key={key}>
      <Checkbox>{item.id}</Checkbox>
    </FormGroup>
  );

  return (
    <form className="booking-detail">
      <div className="no-padding">
        <KeyValueComponent
          label="Entity region"
          value="Automatically provided when entity is chosen"
        />
      </div>
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

      {children}
    </form>
  );
}

BookingDetails.propTypes = {
  accounts: PropTypes.bool.isRequired,
  children: PropTypes.object,
  facilities: PropTypes.bool.isRequired,
  showAccounts: PropTypes.func,
  showFacilities: PropTypes.func,
};

export default BookingDetails;
