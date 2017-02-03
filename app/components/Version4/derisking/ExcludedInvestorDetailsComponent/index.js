/**
*
* ExcludedInvestorDetailsComponent
*
*/

import React from 'react';
import SidebarHeaderComponent from '../../common/SidebarHeaderComponent';
import SearchField from '../../common/SearchField';
import { Link } from 'react-router';
import CounterpartyDetailComponent from '../../counterparty/CounterpartyDetailComponent';
import fakeData from '../fakeData';


function ExcludedInvestorDetailsComponent() {
  const expand = true;
  const showExpandButton = false;
  const showAddToTheListButton = false;
  return (
    <div className="content-block excludedinvestordetails" >
      <SidebarHeaderComponent title="Details of investor excluded from the deal" />

      <SearchField onChangeFunction={() => {}} label="Paragon ID or Name" description="(Search and select one at a time)" />

      <CounterpartyDetailComponent
        showExpandButton={showExpandButton}
        showAddToTheListButton={showAddToTheListButton}
        expand={expand}
        expandDetails={() => {}}
        showSelectedProducts={() => {}}
        data={fakeData.CounterpartyDetail}
      />

      <Link to="/">
        <p className="remove">Remove excluded investor from the deal</p>
      </Link>

      <Link to="/">
        <p className="close-sidebar">Close</p>
      </Link>
    </div>
  );
}

export default ExcludedInvestorDetailsComponent;
