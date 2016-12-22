/**
*
* RightSidebarComponent
*
*/

import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

import AddCounterpartyContainer from '../../../containers/Version4/AddCounterpartyContainer';
import ChooseSubLimitComponent from '../../../components/Version4/ChooseSubLimitComponent';
import CounterpartyDetailComponent from '../../../components/Version4/CounterpartyDetailComponent';

function RightSidebarComponent({ hideSidebar, visible, newSubLimit, sidebarComponent, counterpartyDetail, backCounterpartyList, viewCounterparty }) {
  return (
    <div className={`sidebar-content ${visible}`}>
      <div className="mask"></div>
      <div className="right">
        {sidebarComponent === 'sublimit' &&
          <ChooseSubLimitComponent newSubLimit={newSubLimit} hideSidebar={hideSidebar} />
        }

        {(sidebarComponent === 'counterparty') && !counterpartyDetail &&
          <AddCounterpartyContainer hideSidebar={hideSidebar} viewCounterparty={viewCounterparty} />
        }

        {counterpartyDetail &&
          <CounterpartyDetailComponent />
        }

        <p className="text-center">
          {counterpartyDetail && <Button bsStyle="default" onClick={backCounterpartyList}>Back</Button>}
          <Button bsStyle="default" onClick={() => { hideSidebar(); backCounterpartyList(); }}>Cancel</Button>
          {counterpartyDetail && <Button bsStyle="primary" onClick={() => { hideSidebar(); backCounterpartyList(); }}>Add</Button>}
        </p>
      </div>
    </div>
  );
}

RightSidebarComponent.propTypes = {
  backCounterpartyList: PropTypes.func.isRequired,
  counterpartyDetail: PropTypes.bool.isRequired,
  hideSidebar: PropTypes.func.isRequired,
  newSubLimit: PropTypes.func.isRequired,
  sidebarComponent: PropTypes.string.isRequired,
  viewCounterparty: PropTypes.func.isRequired,
  visible: PropTypes.string,
};

export default RightSidebarComponent;
