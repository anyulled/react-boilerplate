/**
 *
 * GridLayout
 *
 */
import React from 'react';
import ReactGridLayout from 'react-grid-layout';
import Deal from '../Deal';
import DealLimits from '../DealLimits';
import Counterparties from '../Counterparties';
import Collaterals from '../Collaterals';
import Contacts from '../Contacts';
import Derisking from '../Derisking';
import Utilization from '../Utilization';
import RiskReturn from '../RiskReturn';
import HeaderContainer from '../../containers/HeaderContainer';
import BreadcrumbContainer from '../../containers/BreadcrumbContainer';
import FooterContainer from '../../containers/FooterContainer';

class GridLayout extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const layout = [
      { i: 'dealCore', x: 0, y: 0, w: 3, h: 11, minW: 3, maxW: 12, minH: 5 },
      { i: 'counterparties', x: 3, y: 0, w: 3, h: 9, minW: 3, maxW: 12, minH: 5 },
      { i: 'dealLimits', x: 6, y: 0, w: 3, h: 3, minW: 3, maxW: 12, minH: 3 },
      { i: 'collaterals', x: 9, y: 0, w: 3, h: 9, minW: 3, maxW: 12, minH: 9 },
      { i: 'contacts', x: 0, y: 10, w: 3, h: 12, minW: 3, maxW: 12, minH: 12 },
      { i: 'derisking', x: 3, y: 10, w: 3, h: 3, minW: 3, maxW: 12, minH: 3 },
      { i: 'utilization', x: 6, y: 10, w: 3, h: 3, minW: 3, maxW: 12, minH: 3 },
      { i: 'riskReturn', x: 9, y: 10, w: 3, h: 3, minW: 3, maxW: 12, minH: 3 },
    ];
    return (
      <div>
        <HeaderContainer />
        <BreadcrumbContainer />
        <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
          <div className="react-grid-item" key={'dealCore'}>
            <span className="text"><Deal /></span>
          </div>
          <div className="react-grid-item" key={'counterparties'}>
            <Counterparties />
          </div>
          <div className="react-grid-item" key={'dealLimits'}>
            <DealLimits />
          </div>
          <div className="react-grid-item" key={'collaterals'}>
            <Collaterals />
          </div>
          <div className="react-grid-item" key={'contacts'}>
            <Contacts />
          </div>
          <div className="react-grid-item" key={'derisking'}>
            <Derisking />
          </div>
          <div className="react-grid-item" key={'utilization'}>
            <Utilization />
          </div>
          <div className="react-grid-item" key={'riskReturn'}>
            <RiskReturn />
          </div>
        </ReactGridLayout>
        <FooterContainer />
      </div>
    );
  }
}

export default GridLayout;
