/**
*
* ChooseSubLimitComponent
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

import data from './data';
import TreeComponent from '../../../components/Version4/TreeComponent';
import SidebarHeaderComponent from '../common/SidebarHeaderComponent';

function ChooseSubLimitComponent({ newSubLimit }) {
  return (
    <div className="content-block">
      <SidebarHeaderComponent title="Add sub-limit to restrict the deal" />

      <p>Please, select a deal or sub-limit from where you want to restrict the deal:</p>

      <TreeComponent newSubLimit={newSubLimit} data={data} />
      <p className="text-center fixedButtons">
        <Link to="/">
          <Button bsStyle="default">Cancel</Button>
        </Link>
      </p>
    </div>
  );
}

ChooseSubLimitComponent.propTypes = {
  newSubLimit: PropTypes.func,
};

export default ChooseSubLimitComponent;
