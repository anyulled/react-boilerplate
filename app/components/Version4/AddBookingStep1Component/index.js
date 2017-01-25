/**
*
* AddBookingStep1Component
*
*/

import React, { PropTypes } from 'react';
import { Glyphicon, Row, ControlLabel, InputGroup, FormControl, FormGroup } from 'react-bootstrap';

import StepsHeaderComponent from '../../../components/Version4/StepsHeaderComponent';
import NotFoundComponent from '../../../components/Version4/NotFoundComponent';
import BookingComponent from '../../../components/Version4/BookingComponent';
import BookingListItemComponent from '../../../components/Version4/BookingListItemComponent';
import BookingDetails from '../../../components/Version4/booking/BookingDetails';
import fakeData from '../../../components/Version4/booking/fakeData';

function AddBookingStep1Component({ showAccounts, showFacilities, facilities, accounts, showStep2, goBackStep1, searchItems, bookingEntity, addBookingEntity, notFound, bookingEntityDetail, selectedBookingEntity, viewBookingEntityDetail }) {
  let view;
  if (bookingEntity) {
    view = (
      <BookingListItemComponent bookingEntities={fakeData.bookingEntities} viewBookingEntityDetail={viewBookingEntityDetail}>
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
            <form>
              <FormGroup>
                <ControlLabel>Paragon ID or Name <i>(Search and select one at a time)</i></ControlLabel>
                <InputGroup>
                  <FormControl type="text" onChange={searchItems} />
                  <InputGroup.Addon>
                    <Glyphicon glyph="search" />
                  </InputGroup.Addon>
                </InputGroup>
              </FormGroup>
            </form>
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
                <div>
                  <BookingComponent bookingList={fakeData.booking_list} />
                </div>
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
  bookingEntity: PropTypes.bool.isRequired,
  bookingEntityDetail: PropTypes.bool.isRequired,
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
