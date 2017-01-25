/**
*
* RadioGroupAddDeal
*
*/

import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel } from 'react-bootstrap';

function RadioGroupAddDeal({ data }) {
  const radioList = data.options.map((item, key) =>
    <div className="wadk-tickbox" key={key}>
      <input type="radio" name="entities" />
      <span className="box-label">
        {item.value} <br />
        <i>{item.description}</i>
      </span>
    </div>
  );
  return (
    <div className="content-block">
      <FormGroup>
        <ControlLabel>{data.title}</ControlLabel>
        <FormGroup>
          {radioList}
        </FormGroup>
      </FormGroup>
    </div>
  );
}

RadioGroupAddDeal.propTypes = {
  data: PropTypes.object.isRequired,
};

export default RadioGroupAddDeal;
