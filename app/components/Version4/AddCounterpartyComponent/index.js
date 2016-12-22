/**
*
* AddCounterpartyComponent
*
*/

import React, { PropTypes } from 'react';
import { Glyphicon, Button, Row, ControlLabel, Col, InputGroup, FormControl, ButtonGroup } from 'react-bootstrap';
import CounterpartyListComponent from '../../../components/Version4/CounterpartyListComponent';

function AddCounterpartyComponent({ hideSidebar, searchItems, showItems }) {
  return (
    <div className="content-block">
      <h3>
        <Glyphicon glyph="remove" onClick={hideSidebar} />
        Add counterparty
      </h3>
      <form>
        <Row>
          <Col md={12}>
            <ControlLabel>Paragon ID - Name</ControlLabel>
            <InputGroup>
              <FormControl type="text" onChange={searchItems} />
              <InputGroup.Addon>
                <Glyphicon glyph="search" />
              </InputGroup.Addon>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <ControlLabel>Client is the Obligor</ControlLabel>
            <ButtonGroup>
              <Button>No</Button>
              <Button bsStyle="success">Yes</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </form>
      {showItems &&
        <div>
          <p className="text-center">
            Coincidence found:
          </p>
          <CounterpartyListComponent hideSidebar={hideSidebar} />
        </div>
      }
    </div>
  );
}

AddCounterpartyComponent.propTypes = {
  hideSidebar: PropTypes.func.isRequired,
  searchItems: PropTypes.func.isRequired,
  showItems: PropTypes.bool.isRequired,
};

export default AddCounterpartyComponent;
