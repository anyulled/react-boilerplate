/**
*
* AddCounterpartyComponent
*
*/

import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

import AddCounterpartyStep1Container from '../../../containers/Version4/AddCounterpartyStep1Container';

import SidebarHeaderComponent from '../../../components/Version4/SidebarHeaderComponent';

function AddCounterpartyComponent({ hideSidebar }) {
  return (
    <div className="content-block steps">

      <SidebarHeaderComponent title="Add counterparties to the deal" hideSidebar={hideSidebar} />

      <div className="scroll">
        <AddCounterpartyStep1Container />
      </div>

      <p className="text-center fixedButtons">
        <Button bsStyle="default" onClick={hideSidebar}>Cancel</Button>
      </p>
    </div>
  );
}

AddCounterpartyComponent.propTypes = {
  hideSidebar: PropTypes.func.isRequired,
};

export default AddCounterpartyComponent;
