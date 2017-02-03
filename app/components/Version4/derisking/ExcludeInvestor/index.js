/**
*
* ExcludeInvestor
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Row, ControlLabel, FormGroup, Button } from 'react-bootstrap';

import SidebarHeaderComponent from '../../common/SidebarHeaderComponent';
import SearchField from '../../common/SearchField';
import NotFoundComponent from '../../common/NotFoundComponent';
import SearchList from '../../common/SearchList';
import CounterpartyDetailComponent from '../../counterparty/CounterpartyDetailComponent';

import ExcludedInvestorsComponent from '../ExcludedInvestorsComponent';
import fakeData from '../fakeData';

function ExcludeInvestor({ selectedProducts, expand, expandDetails, showSelectedProducts, searchItems, showItems, notFound, investorDetail, viewInvestor }) {
  let view;
  if (showItems) {
    view = <SearchList list={fakeData.searchList} clickFunction={viewInvestor} />;
  } else {
    view = (
      <NotFoundComponent
        text1="If the investor doesn't exist, you can leave the reference and replace it with the ID later."
        text2="You must replace the reference by a valid ID before sending to approval."
      />
    );
  }
  return (
    <div className="content-block steps">
      <SidebarHeaderComponent title="Exclude investors from the deal" />

      <div className="scroll">
        <Row>
          <h4 className="col-md-12">
            <b>Select investors to exclude from the deal</b>
          </h4>
        </Row>
        <Row className="row-eq-height counterparties">
          <div className="content-pane pane-2 col-md-6">
            <div className="content-block">
              <SearchField onChangeFunction={searchItems} label="Paragon ID or Name" description="(Search and select one at a time)" />

              {!(showItems || notFound) &&
                <p>
                  Search for a investor to add it to the list of selected investors to exclude.
                </p>
              }
              {(showItems || notFound) && !investorDetail &&
                <div>
                  <p>
                    SEARCH RESULT:
                  </p>
                  {view}
                </div>
              }

              {investorDetail && showItems &&
                <CounterpartyDetailComponent
                  showExpandButton
                  expand={expand}
                  expandDetails={expandDetails}
                  data={fakeData.CounterpartyDetail}
                >
                  <p className="text-center">
                    <Button bsStyle="primary" onClick={showSelectedProducts}>Add to the list</Button>
                  </p>
                </CounterpartyDetailComponent>
              }

            </div>
          </div>
          <div className="content-pane pane-2 col-md-6">
            <div className="content-block">
              <FormGroup>
                <ControlLabel>Selected investors:</ControlLabel>
                {!selectedProducts &&
                  <div className="empty-list">
                    List is empty.<br />
                    Please, search and select investors you want to exclude from the deal.
                  </div>
                }

                {selectedProducts &&
                  <ExcludedInvestorsComponent excludedInvestors={fakeData.excludedInvestors} />
                }
              </FormGroup>
            </div>
          </div>
        </Row>
      </div>
      <p className="text-center fixedButtons">
        {selectedProducts &&
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

ExcludeInvestor.propTypes = {
  investorDetail: PropTypes.bool.isRequired,
  expand: PropTypes.bool,
  expandDetails: PropTypes.func,
  notFound: PropTypes.bool.isRequired,
  searchItems: PropTypes.func,
  selectedProducts: PropTypes.bool.isRequired,
  showItems: PropTypes.bool,
  showSelectedProducts: PropTypes.func.isRequired,
  viewInvestor: PropTypes.func.isRequired,
};

export default ExcludeInvestor;
