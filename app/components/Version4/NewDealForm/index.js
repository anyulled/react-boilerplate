/**
*
* NewDealForm
*
*/

import React from 'react';
import { Row, Col, Button, ControlLabel, FormControl, InputGroup, Glyphicon, ButtonGroup } from 'react-bootstrap';

class NewDealForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <form>
        <Row>
          <Col md={10} lg={7}>
            <ControlLabel>Status</ControlLabel>
            <FormControl componentClass="select">
              <option value="select"></option>
            </FormControl>
          </Col>
        </Row>

        <Row>
          <Col md={10} lg={7}>
            <ControlLabel>Nickname</ControlLabel>
            <FormControl type="text" />
          </Col>

          <Col md={2} lg={5}>
            <small>(optional)</small>
          </Col>
        </Row>

        <Row>
          <Col md={6} lg={4}>
            <ControlLabel>Pipeline ID</ControlLabel>
            <FormControl type="text" />
          </Col>

          <Col md={6} lg={8}>
            <small>(optional)</small>
          </Col>
        </Row>

        <Row>
          <Col md={6} lg={4}>
            <ControlLabel>Degree of Confidence</ControlLabel>
            <FormControl componentClass="select">
              <option value="select"></option>
            </FormControl>
          </Col>
        </Row>

        <Row>
          <Col md={6} lg={4}>
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
          <Col md={10} lg={7}>
            <ControlLabel>Exposure status</ControlLabel>
            <FormControl componentClass="select">
              <option value="select"></option>
            </FormControl>
          </Col>
        </Row>

        <Row>
          <Col md={12} lg={12}>
            <ControlLabel>Deal logged</ControlLabel>
            <ButtonGroup>
              <Button>No</Button>
              <Button bsStyle="success">Yes</Button>
            </ButtonGroup>
          </Col>
        </Row>

        <Row>
          <Col md={12} lg={12}>
            <Button bsStyle="danger" className="pull-right" >DELETE DEAL</Button>
          </Col>
        </Row>

      </form>
    );
  }
}

export default NewDealForm;
