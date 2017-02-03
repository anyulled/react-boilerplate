/**
*
* ExcludedInvestorDetailsComponent
*
*/

import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

import SidebarHeaderComponent from '../../common/SidebarHeaderComponent';

import KeyValueComponent from '../../common/KeyValueComponent';

import CounterpartyDetailComponent from '../../counterparty/CounterpartyDetailComponent';

import fakeData from '../fakeData';

function ExcludedInvestorDetailsComponent() {
  return (
    <div className="content-block excludedinvestordetails" >
      <SidebarHeaderComponent title="Details of investor excluded from the deal" />

      <div className="no-padding" style={{ display: 'inline-block' }}>
        <KeyValueComponent label="Paragon ID - Name" value="1234567890 - SIEMENS AKTIENGESELLSCHAFT" colSize={12} />
      </div>

      <CounterpartyDetailComponent
        showExpandButton={false}
        expand
        expandDetails={() => {}}
        data={fakeData.CounterpartyDetail}
      />

      <Link to="/">
        <p className="remove">Remove excluded investor from the deal</p>
      </Link>

      <p className="text-center fixedButtons">
        <Link to="/">
          <Button bsStyle="default">Cancel</Button>
        </Link>
      </p>
    </div>
  );
}

export default ExcludedInvestorDetailsComponent;
