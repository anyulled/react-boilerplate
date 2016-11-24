/**
*
* BreadcrumbComponent
*
*/

import React from 'react';
import { Link } from 'react-router';
import { Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';
import PageActionsContainer from '../../containers/PageActionsContainer';

class BreadcrumbComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const breadcrumbItems = this.props.routes ? this.props.routes.filter((r) => r.path).map((crumb, id) =>
      <Link to={crumb.path} key={id}>
        {crumb.name}
      </Link>
    ) : null;
    return (
      <div className="page-header-block navbar-fixed-top">
        <Grid fluid>
          <Row>
            <Col md={6} lg={8}>
              <Nav bsStyle="pills">
                <NavItem disabled className="current-page-title">You are here:</NavItem>
                {breadcrumbItems}
              </Nav>
            </Col>
            {this.props.pageActionsBreadcrumb &&
              <PageActionsContainer {...this.props} />
            }
          </Row>
        </Grid>
      </div>
    );
  }
}

BreadcrumbComponent.propTypes = {
  pageActionsBreadcrumb: React.PropTypes.bool.isRequired,
  routes: React.PropTypes.array.isRequired,
};

export default BreadcrumbComponent;
