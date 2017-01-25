/**
*
* AddBookingStep1Component
*
*/

import React, { PropTypes } from 'react';
import { Row, ControlLabel, FormGroup } from 'react-bootstrap';

import NotFoundComponent from '../../common/NotFoundComponent';
import StepsHeaderComponent from '../../common/StepsHeaderComponent';
import SearchField from '../../common/SearchField';

import BookingListItemComponent from '../BookingListItemComponent';
import BookingComponent from '../BookingComponent';
import BookingDetails from '../BookingDetails';

function AddBookingStep1Component({ bookingEntities, bookingList, showAccounts, showFacilities, facilities, accounts, showStep2, goBackStep1, searchItems, bookingEntity, addBookingEntity, notFound, bookingEntityDetail, selectedBookingEntity, viewBookingEntityDetail }) {
  let view;
  if (bookingEntity) {
    view = (
      <BookingListItemComponent bookingEntities={bookingEntities} viewBookingEntityDetail={viewBookingEntityDetail}>
        <a className="text-center load-more">Load (05) more</a>
      </BookingListItemComponent>
    );
  } else {
    view = <NotFoundComponent text1="No booking entity was found with the criteria you typed for name or location." />;
  }

  return (
    <div>
      <StepsHeaderComponent title="Select Booking entities to add to the deal" step1 step={1} showStep2={showStep2} goBackStep1={goBackStep1} />
      <Row className={(showStep2) ? 'row-eq-height counterparties hide' : 'row-eq-height counterparties'}>
        <div className="content-pane pane-2 col-md-6">
          <div className="content-block">

            <SearchField onChangeFunction={searchItems} label="Booking entity" description="(Select one)" />

            {!(bookingEntity || notFound) &&
              <p>
                Search for a counterparty to add it to the list of selected counterparties on the deal.
              </p>
            }

            {(bookingEntity || notFound) && !bookingEntityDetail &&
              <div>
                <p>
                  SEARCH RESULT:
                </p>
                {view}
              </div>
            }

            {bookingEntityDetail && bookingEntity &&
              <BookingDetails
                showAccounts={showAccounts}
                showFacilities={showFacilities}
                accounts={accounts}
                facilities={facilities}
                addBookingEntity={addBookingEntity}
              />
            }
          </div>
        </div>
        <div className="content-pane pane-2 col-md-6">
          <div className="content-block">
            <FormGroup>
              <ControlLabel>Selected products:</ControlLabel>
              {!selectedBookingEntity &&
                <div className="empty-list">
                  List is empty.<br />
                  Please, select entities you want to add to the deal.
                </div>
              }

              {selectedBookingEntity &&
                <BookingComponent bookingList={bookingList} />
              }
            </FormGroup>
          </div>
        </div>
      </Row>
    </div>
  );
}

AddBookingStep1Component.propTypes = {
  accounts: PropTypes.bool.isRequired,
  addBookingEntity: PropTypes.func.isRequired,
  bookingEntities: PropTypes.array.isRequired,
  bookingEntity: PropTypes.bool.isRequired,
  bookingEntityDetail: PropTypes.bool.isRequired,
  bookingList: PropTypes.array.isRequired,
  facilities: PropTypes.bool.isRequired,
  goBackStep1: PropTypes.func.isRequired,
  notFound: PropTypes.bool.isRequired,
  searchItems: PropTypes.func.isRequired,
  showAccounts: PropTypes.func.isRequired,
  showFacilities: PropTypes.func.isRequired,
  selectedBookingEntity: PropTypes.bool.isRequired,
  showStep2: PropTypes.bool.isRequired,
  viewBookingEntityDetail: PropTypes.func.isRequired,
};

export default AddBookingStep1Component;
