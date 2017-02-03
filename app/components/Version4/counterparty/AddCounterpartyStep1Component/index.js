/**
*
* AddCounterpartyStep1Component
*
*/

import React, { PropTypes } from 'react';
import { Row, ControlLabel, FormGroup, Button } from 'react-bootstrap';

import StepsHeaderComponent from '../../common/StepsHeaderComponent';
import NotFoundComponent from '../../common/NotFoundComponent';
import SearchField from '../../common/SearchField';

import CounterpartyListComponent from '../CounterpartyListComponent';
import CounterpartyDetailComponent from '../CounterpartyDetailComponent';
import CounterpartySelectedComponent from '../CounterpartySelectedComponent';
import CounterpartyRole from '../CounterpartyRole';

function AddCounterpartyStep1Component({ counterpartyDetailFields, searchItems, showItems, viewCounterparty, counterpartyDetail, notFound, expand, expandDetails, showSelectedProducts, selectedProducts, showStep2, goBackStep1 }) {
  let view;
  if (showItems) {
    view = <CounterpartyListComponent viewCounterparty={viewCounterparty} />;
  } else {
    view = (
      <NotFoundComponent
        text1="If the counterparty does not exist, you can leave the reference and replace it with the ID later."
        text2="You must replace the reference by a valid ID before sending to approval."
      />
    );
  }
  return (
    <div>
      <StepsHeaderComponent title="Select counterparties to add to the deal" step1 step={1} showStep2={showStep2} goBackStep1={goBackStep1} />
      <Row className={(showStep2) ? 'row-eq-height counterparties hide' : 'row-eq-height counterparties'}>
        <div className="content-pane pane-2 col-md-6">
          <div className="content-block">

            <SearchField onChangeFunction={searchItems} label="Paragon ID or Name" description="(Search and select one at a time)" />

            {!(showItems || notFound) &&
              <p>
                Search for a counterparty to add it to the list of selected counterparties on the deal.
              </p>
            }
            {(showItems || notFound) && !counterpartyDetail &&
              <div>
                <p>
                  SEARCH RESULT:
                </p>
                {view}
              </div>
            }

            {counterpartyDetail && showItems &&
              <CounterpartyDetailComponent
                showExpandButton
                expand={expand}
                expandDetails={expandDetails}
                data={counterpartyDetailFields}
              >
                <div>
                  <CounterpartyRole />
                  <p className="text-center">
                    <Button bsStyle="primary" onClick={showSelectedProducts}>Add to the list</Button>
                  </p>
                </div>
              </CounterpartyDetailComponent>
            }
          </div>
        </div>
        <div className="content-pane pane-2 col-md-6">
          <div className="content-block">
            <FormGroup>
              <ControlLabel>Selected products:</ControlLabel>
              {!selectedProducts &&
                <div className="empty-list">
                  List is empty.<br />
                  Please, select products you want to add to the deal.
                </div>
              }

              {selectedProducts &&
                <CounterpartySelectedComponent />
              }
            </FormGroup>
          </div>
        </div>
      </Row>
    </div>
  );
}

AddCounterpartyStep1Component.propTypes = {
  counterpartyDetail: PropTypes.bool.isRequired,
  counterpartyDetailFields: PropTypes.object.isRequired,
  expand: PropTypes.bool,
  expandDetails: PropTypes.func,
  goBackStep1: PropTypes.func.isRequired,
  notFound: PropTypes.bool.isRequired,
  searchItems: PropTypes.func,
  selectedProducts: PropTypes.bool.isRequired,
  showItems: PropTypes.bool,
  showSelectedProducts: PropTypes.func.isRequired,
  showStep2: PropTypes.bool.isRequired,
  viewCounterparty: PropTypes.func,
};

export default AddCounterpartyStep1Component;
