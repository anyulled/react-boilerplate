/**
*
* ExcludeInvestor
*
*/

import React, { PropTypes } from 'react';
import { Row } from 'react-bootstrap';

import SidebarHeaderComponent from '../../common/SidebarHeaderComponent';
import SearchField from '../../common/SearchField';

function ExcludeInvestor({ searchItems }) {
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
            </div>
          </div>
        </Row>
      </div>
    </div>
  );
}

ExcludeInvestor.propTypes = {
  searchItems: PropTypes.func,
};

export default ExcludeInvestor;
