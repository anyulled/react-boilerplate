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

function AddCounterpartyStep1Component({ searchItems, showItems, viewCounterparty, counterpartyDetail, notFound, expand, expandDetails }) {
  let view;
  if (showItems) {
    view = <CounterpartyListComponent viewCounterparty={viewCounterparty} />;
  } else {
    view = <NotFoundComponent />;
  }
  return (
    <div>
      <StepsHeaderComponent title="Select counterparties to add to the deal" step1 />
      <Row className="row-eq-height counterparties">
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
              <CounterpartyDetailComponent expand={expand} expandDetails={expandDetails} />
            }
          </div>
        </div>
        <div className="content-pane pane-2 col-md-6">
          <div className="content-block">
            <FormGroup>
              <ControlLabel>Selected products:</ControlLabel>
              <div className="empty-list hide">
                List is empty.<br />
                Please, select products you want to add to the deal.
              </div>
              <CounterpartySelectedComponent />
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
  notFound: PropTypes.bool.isRequired,
  searchItems: PropTypes.func,
  showItems: PropTypes.bool,
  viewCounterparty: PropTypes.func,
};

export default AddCounterpartyStep1Component;
