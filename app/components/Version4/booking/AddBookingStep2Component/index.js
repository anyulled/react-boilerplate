/**
*
* AddBookingStep2Component
*
*/

import React, { PropTypes } from 'react';
import { Row, FormGroup, ControlLabel, Checkbox } from 'react-bootstrap';

import StepsHeaderComponent from '../../common/StepsHeaderComponent';
import RadioGroupAddDeal from '../../common/RadioGroupAddDeal';

import BookingItemComponent from '../BookingItemComponent';

function AddBookingStep2Component({ showStep2, RadioGroupAddDealData, BookingComponentData }) {
  const BookingList = BookingComponentData.map((item, key) =>
    <Checkbox key={key}>
      <BookingItemComponent
        title={item.title}
        region={item.region}
        systems={item.systems}
        facilities={item.facilities}
        accounts={item.accounts}
      />
    </Checkbox>
  );
  return (
    <div className="step2">
      <StepsHeaderComponent title="Configure limits for the selected entities" step={2} />
      {showStep2 &&
        <Row className="row-eq-height counterparties">
          <div className="content-pane pane-2 col-md-6">
            <div className="content-block">
              <form>
                <FormGroup>
                  <ControlLabel>Selected entities <i>(Mark entities to restrict)</i></ControlLabel>
                  <div className="booking-component">
                    {BookingList}
                  </div>
                </FormGroup>
              </form>
            </div>
          </div>
          <div className="content-pane pane-2 col-md-6">
            <RadioGroupAddDeal data={RadioGroupAddDealData} />
          </div>
        </Row>
      }
    </div>
  );
}

AddBookingStep2Component.propTypes = {
  BookingComponentData: PropTypes.array.isRequired,
  RadioGroupAddDealData: PropTypes.object.isRequired,
  showStep2: PropTypes.bool.isRequired,
};

export default AddBookingStep2Component;
