/**
*
* ChooseSubLimitComponent
*
*/

import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

import TreeComponent from '../../../components/Version4/TreeComponent';
import SidebarHeaderComponent from '../../../components/Version4/SidebarHeaderComponent';

function ChooseSubLimitComponent({ hideSidebar, newSubLimit }) {
  return (
    <div className="content-block">

      <SidebarHeaderComponent title="Add sub-limit to restrict the deal" hideSidebar={hideSidebar} />

      <p>Please, select a deal or sub-limit from where you want to restrict the deal:</p>
      <TreeComponent newSubLimit={newSubLimit} />
      <p className="text-center fixedButtons">
        <Button bsStyle="default" onClick={hideSidebar}>Cancel</Button>
      </p>
    </div>
  );
}

ChooseSubLimitComponent.propTypes = {
  hideSidebar: PropTypes.func.isRequired,
  newSubLimit: PropTypes.func.isRequired,
};

export default ChooseSubLimitComponent;
