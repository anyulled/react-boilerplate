/**
*
* InvestorItem
*
*/
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Panel, Row, Col } from 'react-bootstrap';

function InvestorItem({ id, name, country, cr, sc }) {
  return (
    <Panel>
      <Row>
        <Col className="col">{id}</Col>
        <Col className="col">{name.substring(0, 34)}</Col>
        <Col className="btns">
          <Link to="/excludedInvestorDetail">
            <button className="btn-details">Details</button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="info">{country}</Col>
        <Col className="info"><em>CR:</em> {cr}</Col>
        <Col className="info"><em>SC:</em> {sc}</Col>
        <Col className="btns">
          <Link to="/">
            <button className="btn-remove">Remove</button>
          </Link>
        </Col>
      </Row>
    </Panel>
  );
}

InvestorItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  cr: PropTypes.string.isRequired,
  sc: PropTypes.string.isRequired,
};

export default InvestorItem;
