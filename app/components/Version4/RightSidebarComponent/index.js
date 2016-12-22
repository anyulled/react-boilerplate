/**
*
* RightSidebarComponent
*
*/

import React, { PropTypes } from 'react';
import { Glyphicon, Button } from 'react-bootstrap';
import TreeComponent from '../../../components/Version4/TreeComponent';
import AddCounterpartyContainer from '../../../containers/Version4/AddCounterpartyContainer';

function RightSidebarComponent({ hideSidebar, visible, newSubLimit, sidebarComponent }) {
  return (
    <div className={`sidebar-content ${visible}`}>
      <div className="mask"></div>
      <div className="right">
        {sidebarComponent === 'sublimit' &&
          <div className="content-block">
            <h3>
              <Glyphicon glyph="remove" onClick={hideSidebar} />
              Add sub-limit to restrict the deal
            </h3>
            <p>Please, select a deal or sub-limit from where you want to restrict the deal:</p>
            <TreeComponent newSubLimit={newSubLimit} />
          </div>
        }

        {sidebarComponent === 'counterparty' &&
          <AddCounterpartyContainer hideSidebar={hideSidebar} />
        }

        <p className="text-center">
          <Button bsStyle="default" onClick={hideSidebar}>Cancel</Button>
        </p>
      </div>
    </div>
  );
}

RightSidebarComponent.propTypes = {
  hideSidebar: PropTypes.func.isRequired,
  newSubLimit: PropTypes.func.isRequired,
  sidebarComponent: PropTypes.string.isRequired,
  visible: PropTypes.string,
};

export default RightSidebarComponent;
