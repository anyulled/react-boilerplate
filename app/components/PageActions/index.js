/**
*
* PageActions
*
*/

import React from 'react';
import { Button, Grid, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';


class PageActions extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    if (this.props.pageActionsPosition === 'breadcrumb') {
      return (
        <Col md={6} lg={4}>
          <Grid fluid className="page-actions">
            <Row>
              <Col md={6}>
                <div className="autosave">
                  <small>Autosaved draft <br />
                  10:00:21 31.12.1999</small>
                </div>
                <div className="buttons">
                  <a>Restore</a>
                  <a className="delete">Delete deal</a>
                </div>
              </Col>
              <Col md={3}>
                <Button bsStyle="primary">Save</Button>
              </Col>
              <Col md={3}>
                <Button bsStyle="primary">Send to approval</Button>
              </Col>
            </Row>
          </Grid>
        </Col>
      );
    }
    return (
      <Grid fluid className="page-actions">
        <Row>
          <Col md={5} lg={6}>
            <ListGroup className="autosave">
              <ListGroupItem>
                Autosaved draft 10:00:21 31.12.1999
              </ListGroupItem>
              <ListGroupItem>
                <Button>Restore</Button>
                <Button bsStyle="danger">Delete deal</Button>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col md={7} lg={6}>
            <Button bsStyle="primary" bsSize="lg" className="no-margin-left">Save</Button>
            <Button bsStyle="primary" bsSize="lg">Send to approval</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

PageActions.propTypes = {
  pageActionsPosition: React.PropTypes.string,
};

export default PageActions;
