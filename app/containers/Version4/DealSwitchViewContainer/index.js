/*
 *
 * DealSwitchViewContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import DealSwitchViewComponent from '../../../components/Version4/DealSwitchViewComponent';

export class DealSwitchViewContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      title: 'Switch to tree',
      icon: 'align-left',
      treeOption: false,
    };
  }

  switchView = () => {
    if (this.state.treeOption) {
      this.setState({
        title: 'Switch to tree',
        icon: 'align-left',
        treeOption: false,
      });
    } else {
      this.setState({
        title: 'Switch to list',
        icon: 'list',
        treeOption: true,
      });
    }
  }

  render() {
    return (
      <DealSwitchViewComponent title={this.state.title} icon={this.state.icon} switchView={this.switchView} />
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(DealSwitchViewContainer);
