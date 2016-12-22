/**
*
* NewDealForm
*
*/

import React, { PropTypes } from 'react';
import { Row, Col, Button, ControlLabel, FormControl, InputGroup, Glyphicon, ButtonGroup } from 'react-bootstrap';

function NewDealForm({ draft }) {
  return (
    <form>
      <Row>
        <Col md={10}>
          <ControlLabel>Status</ControlLabel>
          <FormControl componentClass="select">
            {!draft && <option value="select"></option>}
            {draft && <option value="draft">Draft</option>}
          </FormControl>
        </Col>
      </Row>

      <Row className="edit-field">
        <Col md={6}>
          <ControlLabel>Pipeline ID</ControlLabel>
          {!draft && <FormControl type="text" />}
          {draft && <FormControl type="text" value="ID123" disabled />}
        </Col>

        <Col md={6}>
          <small>(optional)</small>
          {draft && <Button bsStyle="info">Edit</Button>}
        </Col>
      </Row>

      <Row className="edit-field">
        <Col md={6}>
          <ControlLabel>Degree of Confidence</ControlLabel>
          {!draft &&
            <FormControl componentClass="select">
              <option value="select"></option>
            </FormControl>
          }
          {draft &&
            <FormControl componentClass="select" disabled>
              <option value="high">High</option>
            </FormControl>
          }
        </Col>
        {draft &&
          <Col md={6}>
            <Button bsStyle="info">Edit</Button>
          </Col>
        }
      </Row>

      <Row>
        <Col md={6}>
          <ControlLabel>Termination date</ControlLabel>
          <InputGroup>
            <FormControl type="text" />
            <InputGroup.Addon>
              <Glyphicon glyph="calendar" />
            </InputGroup.Addon>
          </InputGroup>
        </Col>
      </Row>

      <Row className="edit-field">
        <Col md={10}>
          <ControlLabel>Exposure status</ControlLabel>
          {!draft &&
            <FormControl componentClass="select">
              <option value="select"></option>
            </FormControl>
          }
          {draft &&
            <FormControl componentClass="select" disabled>
              <option value="performing">Performing</option>
            </FormControl>
          }
        </Col>
        {draft &&
          <Col md={2}>
            <Button bsStyle="info">Edit</Button>
          </Col>
        }
      </Row>

      <Row className="edit-field">
        <Col md={3}>
          <ControlLabel>Deal logged</ControlLabel>
          {!draft &&
            <ButtonGroup>
              <Button>No</Button>
              <Button bsStyle="success">Yes</Button>
            </ButtonGroup>
          }
          {draft &&
            <span className="answer">Yes</span>
          }
        </Col>
        {draft &&
          <Col md={2}>
            <Button bsStyle="info">Edit</Button>
          </Col>
        }
      </Row>

    </form>
  );
}

NewDealForm.propTypes = {
  draft: PropTypes.bool,
};

export default NewDealForm;
