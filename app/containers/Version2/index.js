/*
 *
 * Version2
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import HeaderContainer from '../../containers/HeaderContainer';
import BreadcrumbContainer from '../../containers/BreadcrumbContainer';
import PageHeaderContainer from '../../containers/PageHeaderContainer';
import SidebarContainer from '../../containers/SidebarContainer';
import MainDataContainer from '../../containers/MainDataContainer';
import FooterContainer from '../../containers/FooterContainer';

export class Version2 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <HeaderContainer />
        <BreadcrumbContainer {...this.props} />
        <PageHeaderContainer {...this.props} />
        <Grid fluid>
          <Row>
            <Col md={12}>
              <SidebarContainer />
              <MainDataContainer />
            </Col>
          </Row>
        </Grid>
        <FooterContainer />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Version2);
