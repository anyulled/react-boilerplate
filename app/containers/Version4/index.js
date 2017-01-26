/*
 *
 * Version4
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import DealSectionsContainer from '../../containers/Version4/DealSectionsContainer';
import RightSidebarContainer from '../../containers/Version4/RightSidebarContainer';

import DealsTableComponent from '../../components/Version4/DealsTableComponent';

import DealHeader from '../../components/Version4/header/DealHeader';
import fakeData from '../../components/Version4/header/fakeData';

export class Version4 extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      dealInformations: fakeData.dealInfomations.initial,
    };
  }

  hideSidebar = () => {
    browserHistory.push('/');
  }

  addDealHeaderInformation = () => {
    this.setState({
      dealInformations: fakeData.dealInfomations.randomValues,
    });
    this.hideSidebar();
  }

  render() {
    return (
      <div>
        <RightSidebarContainer
          url={this.props.location.pathname}
          addDealHeaderInformation={this.addDealHeaderInformation}
        >
          {this.props.children && React.cloneElement(this.props.children, {
            url: this.props.location.pathname,
          })}
        </RightSidebarContainer>

        <DealHeader
          onRef={(ref) => (this.child = ref)}
          dealId={1234567890}
          dealInformations={this.state.dealInformations}
        />

        <DealSectionsContainer />

        <div className="flex-container deal-content">
          <DealsTableComponent />
        </div>
      </div>
    );
  }
}

Version4.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Version4);
