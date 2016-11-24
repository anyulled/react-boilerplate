/*
 *
 * Version2
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import PageHeaderContainer from '../../containers/PageHeaderContainer';
import SidebarContainer from '../../containers/SidebarContainer';
import MainDataContainer from '../../containers/MainDataContainer';

export class Version2 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <PageHeaderContainer {...this.props} />
        <Grid fluid>
          <Row>
            <Col md={12}>
              <SidebarContainer />
              <MainDataContainer />
            </Col>
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

export default connect(null, mapDispatchToProps)(Version2);
