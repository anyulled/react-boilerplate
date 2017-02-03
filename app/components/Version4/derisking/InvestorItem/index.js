/**
*
* InvestorItem
*
*/
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Panel, Row, Col } from 'react-bootstrap';

function InvestorItem({ id, name, country, cr, sc }) {
  let shortString = '';
  if (name.length >= 40) {
    shortString = `${name.substring(0, 40)} ...`;
  } else {
    shortString = name;
  }
  return (
    <Panel>
      <Row>
        <Col className="col">{id}</Col>
        <Col className="col">{shortString}</Col>
        <Col className="btns">
          <Link to="/">
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
