/*
 *
 * Version4
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';

import DealTabsContainer from '../../containers/Version4/DealTabsContainer';
import DealDetailsContainer from '../../containers/Version4/DealDetailsContainer';
import DealSectionsContainer from '../../containers/Version4/DealSectionsContainer';

import AutosaveComponent from '../../components/Version4/AutosaveComponent';
import DealLimitsComponent from '../../components/Version4/DealLimitsComponent';
import LimitsComponent from '../../components/Version4/LimitsComponent';
import ProductComponent from '../../components/Version4/ProductComponent';
import CounterpartyComponent from '../../components/Version4/CounterpartyComponent';
import BookingComponent from '../../components/Version4/BookingComponent';
import CollateralComponent from '../../components/Version4/CollateralComponent';
import ContactComponent from '../../components/Version4/ContactComponent';
import RightSidebarComponent from '../../components/Version4/RightSidebarComponent';
import AddSubLimitComponent from '../../components/Version4/AddSubLimitComponent';

export class Version4 extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      visible: '',
      sublimit: false,
      sidebarComponent: '',
    };
  }

  showSidebar = (component) => {
    this.setState({
      visible: 'visible',
      sidebarComponent: component,
    });
  }

  hideSidebar = () => {
    this.setState({
      visible: '',
      sidebarComponent: '',
    });
  }

  newSubLimit = () => {
    this.setState({ sublimit: true });
    this.hideSidebar();
  }

  render() {
    return (
      <div>

        <RightSidebarComponent
          visible={this.state.visible}
          hideSidebar={this.hideSidebar}
          newSubLimit={this.newSubLimit}
          sidebarComponent={this.state.sidebarComponent}
        />

        <div className="navbar-fixed-top deal-header">
          <Grid fluid>
            <Row className="page-header-block">
              <Col md={12}>
                <AutosaveComponent />
                <h1>
                  <Glyphicon glyph="circle-arrow-left" />
                  Deal 1234567890
                </h1>
                <DealDetailsContainer />
                <DealTabsContainer />
              </Col>
            </Row>
          </Grid>
        </div>

        <Grid fluid className="deal-content">
          <Row className="row-stretch">
            <DealSectionsContainer />
            <Col md={3} className="content-pane pane-2 left-pane">
              <DealLimitsComponent title="Deal Limits" />
              <LimitsComponent title="Limits" />
              <ProductComponent title="Products" />
              <CounterpartyComponent
                showSidebar={() => this.showSidebar('counterparty')}
                title="Counterparty"
              />
              <BookingComponent title="Booking" />
              <CollateralComponent title="Collateral" />
              <ContactComponent title="Contact" />
            </Col>

            {this.state.sublimit &&
              <Col md={3} className="content-pane">
                <DealLimitsComponent title="Sub-limit name" draft />
                <LimitsComponent title="Limits" />
                <ProductComponent title="Products" />
                <CounterpartyComponent title="Counterparty" />
                <BookingComponent title="Booking" />
                <CollateralComponent title="Collateral" />
                <ContactComponent title="Contact" />
              </Col>
            }

            <AddSubLimitComponent
              showSidebar={() => this.showSidebar('sublimit')}
              sublimit={this.state.sublimit}
            />
          </Row>
        </Grid>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Version4);
