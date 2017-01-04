/*
 *
 * Version4
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';
import { browserHistory } from 'react-router';

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
      sublimit: false,
      productsAdded: false,
      counterpartyAdded: false,
      counterpartyAdded2: false,
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

  hideSidebar = () => {
    browserHistory.push('/');
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

  newCounterparty = () => {
    this.newSubLimit();
    this.setState({
      counterpartyAdded: true,
      counterpartyAdded2: true,
    });
  }

  addDealHeaderInformation = () => {
    this.child.updateHeaderDeal();
    this.hideSidebar();
  }

  render() {
    return (
      <div>

        <RightSidebarContainer
          url={this.props.location.pathname}
          newSubLimit={this.newSubLimit}
          addDealHeaderInformation={this.addDealHeaderInformation}
          newProduct={this.newProduct}
          newCounterparty={this.newCounterparty}
        >
          {this.props.children && React.cloneElement(this.props.children, {
            url: this.props.location.pathname,
          })}
        </RightSidebarContainer>

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

        <DealSectionsContainer />

        <div className="flex-container deal-content">

          {this.state.sublimit &&
            <div className="alert alert-success" role="alert" ref={(c) => { this.successMessage = c; }}>
              New sub-limit was created in the deal. <a>UNDO</a>
            </div>
          }

          <div className="box content-pane pane-2 left-pane">
            <DealLimitsComponent title="Deal Limits" />
            <LimitsComponent title="Limits" />
            <ProductContainer
              title="Products"
              productsAdded={this.state.productsAdded}
              showProductDetails={() => this.showSidebar('productDetails')}
            />
            <CounterpartyComponent
              counterpartyAdded={this.state.counterpartyAdded}
              title="Counterparty"
            />
            <BookingComponent title="Booking" />
            <CollateralComponent title="Collateral" />
            <ContactComponent title="Contact" />
          </div>

          {this.state.sublimit &&
            <div className="content-pane pane-3 box">
              <DealLimitsComponent title="Sub-limit name" draft />
              <LimitsComponent title="Limits" />
              <ProductContainer
                title="Products"
                showSidebar={() => this.showSidebar('product')}
                productsAdded={this.state.productsAdded}
              />
              <CounterpartyComponent
                title="Counterparty"
                counterpartyAdded2={this.state.counterpartyAdded2}
              />
              <BookingComponent title="Booking" />
              <CollateralComponent title="Collateral" />
              <ContactComponent title="Contact" />
            </div>
          }
          <AddSubLimitComponent
            showSidebar={() => this.showSidebar('sublimit')}
            sublimit={this.state.sublimit}
          />
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
