/**
*
* PageHeaderComponent
*
*/

import React from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';

import PageActionsContainer from '../../containers/PageActionsContainer';

class PageHeaderComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Grid fluid className="page-header-box">
        <Row>
          <Col md={7} lg={8}>
            <PageHeader>Deal ID</PageHeader>
          </Col>

          <Col md={5} lg={4}>
            <PageActionsContainer {...this.props} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default PageHeaderComponent;
