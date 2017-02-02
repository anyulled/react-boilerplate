/**
*
* ExcludedInvestorDetailsComponent
*
*/

import React from 'react';
import SidebarHeaderComponent from '../../common/SidebarHeaderComponent';
import SearchField from '../../common/SearchField';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';


function ExcludedInvestorDetailsComponent() {
  return (
    <div className="content-block excludedinvestordetails" >
      <SidebarHeaderComponent title="Details of investor excluded from the deal" />

      <Row>
        <Col md={11}>
          <SearchField onChangeFunction={() => {}} label="Paragon ID or Name" description="(Search and select one at a time)" />
        </Col>
      </Row>

      <Row>
        <Col md={10}>
          <p className="investor-label">CRM Responsible</p>
          <p><b>Peter Mustermann</b></p>
        </Col>
      </Row>

      <Row>
        <Col md={3}>
          <p className="investor-label">Credit rating</p>
          <p><b>iA</b></p>
        </Col>
        <Col md={3}>
          <p className="investor-label">Score card</p>
          <p><b>1101</b></p>
        </Col>
      </Row>

      <Row>
        <Col md={10}>
          <p className="investor-label">Counterparty type</p>
          <p><b>CORPORATE</b></p>
        </Col>
      </Row>

      <Row>
        <Col md={10}>
          <p className="investor-label">Country of domicile</p>
          <p><b>GERMANY</b></p>
        </Col>
      </Row>

      <Row>
        <Col md={10}>
          <p className="investor-label">Industry sector (NACE)</p>
          <p><b>Industry description</b></p>
        </Col>
      </Row>

      <Row>
        <p className="title"><b>LEGAL ENTITY</b></p>
        <Col md={4}>
          <p className="investor-label">Paragon ID</p>
          <p><b>1234567890</b></p>
        </Col>
        <Col md={8}>
          <p className="investor-label">Name</p>
          <p><b>SIEMENS AKTIENGESELLSCHAFT</b></p>
        </Col>
      </Row>

      <Row>
        <p className="title"><b>PARENT</b></p>
        <Col md={4}>
          <p className="investor-label">Paragon ID</p>
          <p><b>1234567890</b></p>
        </Col>
        <Col md={8}>
          <p className="investor-label">Name</p>
          <p><b>SIEMENS AKTIENGESELLSCHAFT</b></p>
        </Col>
      </Row>

      <Row>
        <Col md={10}>
          <p className="investor-label">Credit rating</p>
          <p><b>iA</b></p>
        </Col>
      </Row>

      <Row>
        <Col md={11}>
          <Link to="/">
            <p className="remove">Remove excluded investor from the deal</p>
          </Link>
        </Col>
      </Row>

      <Row>
        <Col md={11}>
          <Link to="/">
            <p className="close-sidebar">Close</p>
          </Link>
        </Col>
      </Row>

    </div>
  );
}

export default ExcludedInvestorDetailsComponent;
