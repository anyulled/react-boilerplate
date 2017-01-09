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

import AutosaveComponent from '../../components/Version4/AutosaveComponent';
import RightSidebarContainer from '../../containers/Version4/RightSidebarContainer';
import AddSubLimitComponent from '../../components/Version4/AddSubLimitComponent';

import DealColumnComponent from '../../components/Version4/DealColumnComponent';

export class Version4 extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      sublimit: false,
      productsAdded: false,
      counterpartyAdded: false,
      counterpartyAdded2: false,
      dealColumns: 0,
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

  addColumn = () => {
    this.setState({
      dealColumns: this.state.dealColumns + 1,
    });

    this.hideSidebar();
  }

  newSubLimit = () => {
    this.setState({
      sublimit: true,
    });

    this.addColumn();
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
    const columns = [];
    for (let i = 1; i <= this.state.dealColumns; i += 1) {
      columns.push(
        <DealColumnComponent
          key={i}
          title="Sub-limit name"
          productsAdded={this.state.productsAdded}
          showProductDetails={() => this.showSidebar('productDetails')}
          counterpartyAdded={this.state.counterpartyAdded}
        />
      );
    }
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

          <DealColumnComponent
            title="Deal Limits"
            productsAdded={this.state.productsAdded}
            showProductDetails={() => this.showSidebar('productDetails')}
            counterpartyAdded={this.state.counterpartyAdded}
          />

          {columns}

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
