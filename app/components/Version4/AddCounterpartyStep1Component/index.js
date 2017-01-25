/**
*
* AddCounterpartyStep1Component
*
*/

import React, { PropTypes } from 'react';
import { Glyphicon, Row, ControlLabel, InputGroup, FormControl, FormGroup } from 'react-bootstrap';

import StepsHeaderComponent from '../../../components/Version4/StepsHeaderComponent';
import CounterpartyListComponent from '../../../components/Version4/CounterpartyListComponent';
import NotFoundComponent from '../../../components/Version4/NotFoundComponent';
import CounterpartyDetailComponent from '../../../components/Version4/CounterpartyDetailComponent';
import CounterpartySelectedComponent from '../../../components/Version4/CounterpartySelectedComponent';

function AddCounterpartyStep1Component({ searchItems, showItems, viewCounterparty, counterpartyDetail, notFound, expand, expandDetails, showSelectedProducts, selectedProducts, showStep2, goBackStep1 }) {
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
              <CounterpartyDetailComponent expand={expand} expandDetails={expandDetails} showSelectedProducts={showSelectedProducts} />
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
