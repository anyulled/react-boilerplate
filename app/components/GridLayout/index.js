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
import styled from 'styled-components';

// deep clone
function cloneConfig(config){
  return JSON.parse(JSON.stringify(config));
}

const Box = styled.div`
  height: auto !important;
`;

const initialLayout = [
  {i: "dealCore", x: 0, y: 0, w: 3, h: 12, minW: 3, maxW: 12, minH: 10, maxH:15},
  {i: "counterparties", x: 3, y: 0, w: 3, h: 9, minW: 3, maxW: 12, minH: 5},
  {i: "dealLimits", x: 6, y: 0, w: 3, h: 3, minW: 3, maxW: 12, minH: 3},
  {i: "collaterals", x: 9, y: 0, w: 3, h: 9, minW: 3, maxW: 12, minH: 10},
  {i: "contacts", x: 0, y: 10, w: 3, h: 12, minW: 3, maxW: 12, minH: 12},
  {i: "derisking", x: 3, y: 10, w: 3, h: 3, minW: 3, maxW: 12, minH: 3},
  {i: "utilization", x: 6, y: 10, w: 3, h: 3, minW: 3, maxW: 12, minH: 3},
  {i: "riskReturn", x: 9, y: 10, w: 3, h: 3, minW: 3, maxW: 12, minH: 3},
];
class GridLayout extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(...args) {
      super(...args);
      this.state = {
        layout: initialLayout
    };
  }

  onToggleSize(arg){
    var key = _.findKey(this.state.layout, {'i':arg});
    if(this.state.layout[key].h > 2){
      var newLayout = cloneConfig(this.state.layout);
      newLayout[key].h = 2;
      this.setState({
        layout : newLayout
      });
    } else {
      var newLayout = cloneConfig(this.state.layout);
      newLayout[key].h = initialLayout[key].h;
      this.setState({
         layout : newLayout
      });
    }
  }
  render() {
    return (
      <ReactGridLayout className="layout" layout={this.state.layout}  cols={12} rowHeight={30} width={1200}>
        <Box className="react-grid-item" key={'dealCore'}>
          <span className="text">
            <Deal onToggleSize={() => this.onToggleSize('dealCore')} />
          </span>
        </Box>
        <Box className="react-grid-item" key={'counterparties'}>
          <Counterparties onToggleSize={() => this.onToggleSize('counterparties') } />
        </Box>
        <Box className="react-grid-item" key={'dealLimits'}>
          <DealLimits onToggleSize={() => this.onToggleSize('dealLimits') } />
        </Box>
        <Box className="react-grid-item" key={'collaterals'}>
          <Collaterals onToggleSize={() => this.onToggleSize('collaterals') } />
        </Box>
        <Box className="react-grid-item" key={'contacts'}>
          <Contacts onToggleSize={() => this.onToggleSize('contacts') } />
        </Box>
        <Box className="react-grid-item" key={'derisking'}>
          <Derisking onToggleSize={() => this.onToggleSize('derisking') } />
        </Box>
        <Box className="react-grid-item" key={'utilization'}>
          <Utilization onToggleSize={() => this.onToggleSize('utilization') } />
        </Box>
        <Box className="react-grid-item" key={'riskReturn'}>
          <RiskReturn onToggleSize={() => this.onToggleSize('riskReturn') } />
        </Box>
      </ReactGridLayout>
    );
  }
}

export default GridLayout;
