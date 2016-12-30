/**
*
* DealHeaderInformationComponent
*
*/

import React, { PropTypes } from 'react';
import { Row, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';

import SidebarHeaderComponent from '../../../components/Version4/SidebarHeaderComponent';

function DealHeaderInformationComponent({ hideSidebar, addDealHeaderInformation }) {
  return (
    <div className="content-block">
      <SidebarHeaderComponent title="Deal header information" hideSidebar={hideSidebar} />
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
        <Button bsStyle="primary" onClick={() => { hideSidebar(); addDealHeaderInformation(); }}>Apply</Button>
        <Button bsStyle="default" onClick={hideSidebar}>Cancel</Button>
        <Button bsStyle="danger" onClick={hideSidebar}>Delete Deal</Button>
      </p>
    </div>
  );
}

DealHeaderInformationComponent.propTypes = {
  addDealHeaderInformation: PropTypes.func.isRequired,
  hideSidebar: PropTypes.func.isRequired,
};

export default DealHeaderInformationComponent;
