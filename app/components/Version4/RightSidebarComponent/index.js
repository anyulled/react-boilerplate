/**
*
* RightSidebarComponent
*
*/

import React, { PropTypes } from 'react';

import AddCounterpartyContainer from '../../../containers/Version4/AddCounterpartyContainer';
import AddProductContainer from '../../../containers/Version4/AddProductContainer';

import ChooseSubLimitComponent from '../../../components/Version4/ChooseSubLimitComponent';
import DealHeaderInformationComponent from '../../../components/Version4/DealHeaderInformationComponent';
import ProductDetailsComponent from '../../../components/Version4/ProductDetailsComponent';

function RightSidebarComponent({ hideSidebar, visible, newSubLimit, sidebarComponent, counterpartyDetail, viewCounterparty, addDealHeaderInformation, sidebarClass, newProduct, newCounterparty }) {
  return (
    <div className={`sidebar-content ${sidebarClass} ${visible}`}>
      <div className="mask"></div>
      <div className="right">
        {sidebarComponent === 'dealInformation' &&
          <DealHeaderInformationComponent hideSidebar={hideSidebar} addDealHeaderInformation={addDealHeaderInformation} />
        }

        {sidebarComponent === 'sublimit' &&
          <ChooseSubLimitComponent newSubLimit={newSubLimit} hideSidebar={hideSidebar} />
        }

        {(sidebarComponent === 'counterparty') && !counterpartyDetail &&
          <AddCounterpartyContainer hideSidebar={hideSidebar} viewCounterparty={viewCounterparty} newCounterparty={newCounterparty} />
        }

        {(sidebarComponent === 'product') &&
          <AddProductContainer hideSidebar={hideSidebar} newProduct={newProduct} />
        }

        {(sidebarComponent === 'productDetails') &&
          <ProductDetailsComponent hideSidebar={hideSidebar} />
        }
      </div>
    </div>
  );
}

RightSidebarComponent.propTypes = {
  addDealHeaderInformation: PropTypes.func.isRequired,
  counterpartyDetail: PropTypes.bool.isRequired,
  hideSidebar: PropTypes.func.isRequired,
  newCounterparty: PropTypes.func.isRequired,
  newProduct: PropTypes.func.isRequired,
  newSubLimit: PropTypes.func.isRequired,
  sidebarClass: PropTypes.string.isRequired,
  sidebarComponent: PropTypes.string.isRequired,
  viewCounterparty: PropTypes.func.isRequired,
  visible: PropTypes.string,
};

export default RightSidebarComponent;
