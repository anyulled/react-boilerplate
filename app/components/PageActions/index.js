/**
*
* PageActions
*
*/

import React from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';


class PageActions extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
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
    );
  }
}

export default PageActions;
