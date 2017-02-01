/**
*
* InvestorItem
*
*/

import React from 'react';
import { Link } from 'react-router';
import { Panel } from 'react-bootstrap';

function InvestorItem(props){
	return(
		<Panel>
          Paragon ID Paragon Name (if it is too long ...
          <Link to="/">
          	<button className="btn-details">Details</button>
          </Link>
          <ul>
            <li>
              Country
            </li>
            <li>
              <em>CR:</em> iA
            </li>
            <li>
              <em>SC:</em> 1101
            </li>
          </ul>
          <button className="btn-remove">Remove</button>
        </Panel>
	);
}

export default InvestorItem;