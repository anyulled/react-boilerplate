/**
*
* FooterComponent
*
*/

import React from 'react';
import { Navbar } from 'react-bootstrap';

class FooterComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Navbar fluid fixedBottom className="footer">
        DB Distribute (v0.0.3) - © Deutsche Bank AG, Frankfurt am Main
      </Navbar>
    );
  }
}

export default FooterComponent;
