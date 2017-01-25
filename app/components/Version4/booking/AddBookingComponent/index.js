/**
*
* AddBookingComponent
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

import SidebarHeaderComponent from '../../common/SidebarHeaderComponent';

import AddBookingStep1Component from '../AddBookingStep1Component';
import AddBookingStep2Component from '../AddBookingStep2Component';
import fakeData from '../fakeData';

function AddBookingComponent({ showAccounts, showFacilities, accounts, facilities, showStep2, goToStep2, bookingEntity, bookingEntityDetail, selectedBookingEntity, viewBookingEntityDetail, goBackStep1, addBookingEntity, searchItems, notFound }) {
  return (
    <div className="content-block steps">
      <SidebarHeaderComponent title="Add Booking entities to the deal" />

      <div className="scroll">
        <AddBookingStep1Component
          accounts={accounts}
          facilities={facilities}
          showStep2={showStep2}
          goBackStep1={goBackStep1}
          searchItems={searchItems}
          bookingEntity={bookingEntity}
          addBookingEntity={addBookingEntity}
          notFound={notFound}
          bookingEntityDetail={bookingEntityDetail}
          viewBookingEntityDetail={viewBookingEntityDetail}
          selectedBookingEntity={selectedBookingEntity}
          showAccounts={showAccounts}
          showFacilities={showFacilities}
          bookingEntities={fakeData.bookingEntities}
          bookingList={fakeData.booking_list}
        />

        <AddBookingStep2Component showStep2={showStep2} RadioGroupAddDealData={fakeData.RadioGroupAddDeal} BookingComponentData={fakeData.booking_list} />
      </div>

      <p className="text-center fixedButtons">
        {!showStep2 &&
          <Button bsStyle="primary" disabled={!selectedBookingEntity} onClick={goToStep2}>
            Continue
          </Button>
        }

        {showStep2 &&
          <Link to="/">
            <Button bsStyle="primary">Finish</Button>
          </Link>
        }
        <Link to="/">
          <Button bsStyle="default">Cancel</Button>
        </Link>
      </p>
    </div>
  );
}

AddBookingComponent.propTypes = {
  accounts: PropTypes.bool.isRequired,
  addBookingEntity: PropTypes.func.isRequired,
  bookingEntity: PropTypes.bool.isRequired,
  bookingEntityDetail: PropTypes.bool.isRequired,
  facilities: PropTypes.bool.isRequired,
  goBackStep1: PropTypes.func.isRequired,
  goToStep2: PropTypes.func.isRequired,
  notFound: PropTypes.bool.isRequired,
  searchItems: PropTypes.func.isRequired,
  selectedBookingEntity: PropTypes.bool.isRequired,
  showAccounts: PropTypes.func.isRequired,
  showFacilities: PropTypes.func.isRequired,
  showStep2: PropTypes.bool.isRequired,
  viewBookingEntityDetail: PropTypes.func.isRequired,
};

export default AddBookingComponent;
