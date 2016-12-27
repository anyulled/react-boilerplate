/**
*
* RightSidebarComponent
*
*/

import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

import AddCounterpartyContainer from '../../../containers/Version4/AddCounterpartyContainer';
import AddProductContainer from '../../../containers/Version4/AddProductContainer';

import ChooseSubLimitComponent from '../../../components/Version4/ChooseSubLimitComponent';
import CounterpartyDetailComponent from '../../../components/Version4/CounterpartyDetailComponent';
import DealHeaderInformationComponent from '../../../components/Version4/DealHeaderInformationComponent';

function RightSidebarComponent({ hideSidebar, visible, newSubLimit, sidebarComponent, counterpartyDetail, backCounterpartyList, viewCounterparty, addDealHeaderInformation }) {
  return (
    <div className={`sidebar-content ${visible}`}>
      <div className="mask"></div>
      <div className="right">
        {sidebarComponent === 'dealInformation' &&
          <DealHeaderInformationComponent hideSidebar={hideSidebar} />
        }

        {sidebarComponent === 'sublimit' &&
          <ChooseSubLimitComponent newSubLimit={newSubLimit} hideSidebar={hideSidebar} />
        }

        {(sidebarComponent === 'counterparty') && !counterpartyDetail &&
          <AddCounterpartyContainer hideSidebar={hideSidebar} viewCounterparty={viewCounterparty} />
        }

        {counterpartyDetail &&
          <CounterpartyDetailComponent />
        }

        {(sidebarComponent === 'product') &&
          <AddProductContainer hideSidebar={hideSidebar} />
        }

        <p className="text-center">
          {counterpartyDetail && <Button bsStyle="primary" onClick={() => { hideSidebar(); backCounterpartyList(); }}>Add</Button>}

          {sidebarComponent === 'dealInformation' && <Button bsStyle="primary" onClick={() => { hideSidebar(); addDealHeaderInformation(); }}>Apply</Button>}

          <Button bsStyle="default" onClick={() => { hideSidebar(); backCounterpartyList(); }}>Cancel</Button>

          {sidebarComponent === 'dealInformation' && <Button bsStyle="danger" onClick={hideSidebar}>Delete Deal</Button>}

          {counterpartyDetail && <Button bsStyle="default" onClick={backCounterpartyList}>Back</Button>}
        </p>
      </div>
    </div>
  );
}

RightSidebarComponent.propTypes = {
  addDealHeaderInformation: PropTypes.func.isRequired,
  backCounterpartyList: PropTypes.func.isRequired,
  counterpartyDetail: PropTypes.bool.isRequired,
  hideSidebar: PropTypes.func.isRequired,
  newSubLimit: PropTypes.func.isRequired,
  sidebarComponent: PropTypes.string.isRequired,
  viewCounterparty: PropTypes.func.isRequired,
  visible: PropTypes.string,
};

export default RightSidebarComponent;
