/**
*
* AddHeaderInformation
*
*/

import React, { PropTypes } from 'react';
import { Row, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router';

import SidebarHeaderComponent from '../../common/SidebarHeaderComponent';

function AddHeaderInformation({ addDealHeaderInformation }) {
  return (
    <div className="content-block">
      <SidebarHeaderComponent title="Deal header information" />
      <div className="scroll">
        <form className="dealInformationForm">
          <Row>
            <Col md={7}>
              <ControlLabel>Nickname</ControlLabel>
              <FormControl type="text" />
            </Col>
            <Col md={5}>
              <small>(optional)</small>
            </Col>
          </Row>

          <Row>
            <Col md={9}>
              <ControlLabel>Description</ControlLabel>
              <FormControl componentClass="textarea" bsSize="lg" />
            </Col>

            <Col md={3}>
              <small>(optional)</small>
            </Col>
          </Row>

          <Row>
            <Col md={7}>
              <ControlLabel>Documents</ControlLabel>
              <FormControl type="text" />
            </Col>

            <Col md={5}>
              <small>(optional)</small>
            </Col>
          </Row>
        </form>
      </div>
      <p className="text-center fixedButtons">
        <Button bsStyle="primary" onClick={addDealHeaderInformation}>Apply</Button>
        <Link to="/">
          <Button bsStyle="default">Cancel</Button>
        </Link>

        <Link to="/">
          <Button bsStyle="danger">Delete Deal</Button>
        </Link>
      </p>
    </div>
  );
}

AddHeaderInformation.propTypes = {
  addDealHeaderInformation: PropTypes.func,
};

export default AddHeaderInformation;
