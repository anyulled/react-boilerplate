/**
*
* AddProductComponent
*
*/

import React, { PropTypes } from 'react';
import { Glyphicon, Label, Row, Col, ControlLabel, FormControl } from 'react-bootstrap';

function AddProductComponent({ hideSidebar }) {
  return (
    <div className="content-block addProducts">
      <h3>
        <Glyphicon glyph="remove" onClick={hideSidebar} />
        Add TF allowed products to the deal
      </h3>
      <b>
        <Label bsStyle="primary">1</Label> Select products to add to the deal
      </b>
      <Row>
        <div className="content-pane pane-2 col-md-6">
          <div className="content-block">
            aaaa
          </div>
        </div>
        <div className="content-pane pane-2 col-md-6">
          <div className="content-block">
            aaaaa
          </div>
        </div>
      </Row>
    </div>
  );
}

AddProductComponent.propTypes = {
  hideSidebar: PropTypes.func.isRequired,
};

export default AddProductComponent;
