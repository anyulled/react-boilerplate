/**
*
* MainDataComponent
*
*/

import React from 'react';
import { Grid, Row, Col, ControlLabel, FormControl, InputGroup, Glyphicon, Button, ButtonGroup } from 'react-bootstrap';


class MainDataComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="main-data">
        <Grid fluid>
          <Row>
            <Col className="description" md={12}>
              A brief introduction or explanation of the content of this tab that might help new user to get familiar with
the process of setting up a new deal or modifying an existing one.
            </Col>
          </Row>
        </Grid>

        <form>
          <Row>
            <Col md={7} lg={6}>
              <ControlLabel>Status</ControlLabel>
              <FormControl componentClass="select">
                <option value="select"></option>
              </FormControl>
            </Col>
          </Row>

          <Row>
            <Col md={7} lg={6}>
              <ControlLabel>Nickname</ControlLabel>
              <FormControl type="text" />
            </Col>

            <Col md={5} lg={6}>
              <span className="optional">(optional)</span>
            </Col>
          </Row>

          <Row>
            <Col md={4} lg={3}>
              <ControlLabel>Pipeline ID</ControlLabel>
              <FormControl type="text" />
            </Col>

            <Col md={8} lg={9}>
              <span className="optional">(optional)</span>
            </Col>
          </Row>

          <Row>
            <Col md={4} lg={3}>
              <ControlLabel>Degree of Confidence</ControlLabel>
              <FormControl componentClass="select">
                <option value="select"></option>
              </FormControl>
            </Col>
          </Row>

          <Row>
            <Col md={4} lg={3}>
              <ControlLabel>Termination date</ControlLabel>
              <InputGroup>
                <FormControl type="text" />
                <InputGroup.Addon>
                  <Glyphicon glyph="calendar" />
                </InputGroup.Addon>
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col md={7} lg={6}>
              <ControlLabel>Exposure status</ControlLabel>
              <FormControl componentClass="select">
                <option value="select"></option>
              </FormControl>
            </Col>
          </Row>

          <Row>
            <Col md={4} lg={3}>
              <ControlLabel>Deal logged</ControlLabel>
              <ButtonGroup>
                <Button>No</Button>
                <Button bsStyle="success">Yes</Button>
              </ButtonGroup>
            </Col>
          </Row>

        </form>
      </div>
    );
  }
}

export default MainDataComponent;
