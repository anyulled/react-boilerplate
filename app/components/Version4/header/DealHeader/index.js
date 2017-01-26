/**
*
* DealHeader
*
*/

import React, { PropTypes } from 'react';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';

import DealTabsComponent from '../DealTabsComponent';
import AutosaveComponent from '../AutosaveComponent';
import DealDetailsComponent from '../DealDetailsComponent';

function DealHeader({ dealId, dealInformations }) {
  return (
    <div className="navbar-fixed-top deal-header">
      <Grid fluid>
        <Row className="page-header-block">
          <Col md={12}>
            <AutosaveComponent />
            <h1>
              <Glyphicon glyph="circle-arrow-left" />
              Deal {dealId}
            </h1>
            <DealDetailsComponent
              dealInformations={dealInformations}
            />
            <DealTabsComponent />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

DealHeader.propTypes = {
  dealId: PropTypes.number.isRequired,
  dealInformations: PropTypes.object.isRequired,
};

export default DealHeader;
