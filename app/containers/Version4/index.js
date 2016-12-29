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
import ProductContainer from '../../containers/Version4/ProductContainer';

import AutosaveComponent from '../../components/Version4/AutosaveComponent';
import DealLimitsComponent from '../../components/Version4/DealLimitsComponent';
import LimitsComponent from '../../components/Version4/LimitsComponent';
import CounterpartyComponent from '../../components/Version4/CounterpartyComponent';
import BookingComponent from '../../components/Version4/BookingComponent';
import CollateralComponent from '../../components/Version4/CollateralComponent';
import ContactComponent from '../../components/Version4/ContactComponent';
import RightSidebarContainer from '../../containers/Version4/RightSidebarContainer';
import AddSubLimitComponent from '../../components/Version4/AddSubLimitComponent';

export class Version4 extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      visible: '',
      sublimit: false,
      sidebarComponent: '',
      sidebarClass: '',
      productsAdded: false,
    };
  }

  componentDidUpdate= () => {
    if (this.state.sublimit === true) {
      const component = this.successMessage;
      setTimeout(() => {
        component.className += ' fade';
      }, 5000);
    }
  }

  showSidebar = (component) => {
    this.setState({
      visible: 'visible',
      sidebarComponent: component,
    });
    if (component === 'product') {
      this.setState({
        sidebarClass: 'product',
      });
    }
  }

  hideSidebar = () => {
    this.setState({
      visible: '',
      sidebarComponent: '',
      sidebarClass: '',
    });
  }

  newSubLimit = () => {
    this.setState({ sublimit: true });
    this.hideSidebar();
  }

  newProduct = () => {
    this.newSubLimit();
    this.setState({
      productsAdded: true,
    });
  }

  addDealHeaderInformation = () => {
    this.child.updateHeaderDeal();
  }

  render() {
    return (
      <div>

        <RightSidebarContainer
          visible={this.state.visible}
          hideSidebar={this.hideSidebar}
          newSubLimit={this.newSubLimit}
          sidebarComponent={this.state.sidebarComponent}
          sidebarClass={this.state.sidebarClass}
          addDealHeaderInformation={this.addDealHeaderInformation}
          newProduct={this.newProduct}
        />

        <div className="navbar-fixed-top deal-header">
          <Grid fluid>
            <Row className="page-header-block">
              <Col md={12}>
                <AutosaveComponent showSidebar={() => this.showSidebar('dealInformation')} />
                <h1>
                  <Glyphicon glyph="circle-arrow-left" />
                  Deal 1234567890
                </h1>
                <DealDetailsContainer
                  onRef={(ref) => (this.child = ref)}
                  showSidebar={() => this.showSidebar('dealInformation')}
                />
                <DealTabsContainer sublimit={this.state.sublimit} />
              </Col>
            </Row>
          </Grid>
        </div>

        <Grid fluid className="deal-content">

          {this.state.sublimit &&
            <div className="alert alert-success" role="alert" ref={(c) => { this.successMessage = c; }}>
              New sub-limit was created in the deal. <a>UNDO</a>
            </div>
          }

          <Row className="row-stretch">

            <DealSectionsContainer />

            <Col md={3} className="content-pane pane-2 left-pane">
              <DealLimitsComponent title="Deal Limits" />
              <LimitsComponent title="Limits" />
              <ProductContainer
                title="Products"
                showSidebar={() => this.showSidebar('product')}
                productsAdded={this.state.productsAdded}
                showProductDetails={() => this.showSidebar('productDetails')}
              />
              <CounterpartyComponent
                showSidebar={() => this.showSidebar('counterparty')}
                title="Counterparty"
              />
              <BookingComponent title="Booking" />
              <CollateralComponent title="Collateral" />
              <ContactComponent title="Contact" />
            </Col>

            {this.state.sublimit &&
              <Col md={3} className="content-pane pane-3">
                <DealLimitsComponent title="Sub-limit name" draft />
                <LimitsComponent title="Limits" />
                <ProductContainer
                  title="Products"
                  showSidebar={() => this.showSidebar('product')}
                  productsAdded={this.state.productsAdded}
                />
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
