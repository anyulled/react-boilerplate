/**
*
* StepsHeaderComponent
*
*/

import React, { PropTypes } from 'react';

import { Label, Row, Button } from 'react-bootstrap';

function StepsHeaderComponent({ showStep2, goBackStep1, title, step1 }) {
  return (
    <Row>
      <h4 className="col-md-12">
        <Label bsStyle="primary">1</Label>
        <b>{title}</b>
        {showStep2 && step1 &&
          <Button bsStyle="info" onClick={goBackStep1}>select more</Button>
        }
      </h4>
    </Row>
  );
}

StepsHeaderComponent.propTypes = {
  goBackStep1: PropTypes.func,
  showStep2: PropTypes.bool,
  step1: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default StepsHeaderComponent;
