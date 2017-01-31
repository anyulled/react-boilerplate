/**
*
* CollateralDetailsComponent
*
*/

import React from 'react';
import { Link } from 'react-router';
import { FormControl, Button } from 'react-bootstrap';

import SidebarHeaderComponent from '../../common/SidebarHeaderComponent';


function CollateralDetailsComponent() {
	return (
		<div className="content-block">

			<SidebarHeaderComponent title="Collateral details" />

			<div className="scroll">

				<br/><p><b>Collateral held at DB</b></p><br/>

				<table>
					<tbody>
						<tr>
							<td>
								<p>Amount</p>
							</td>
							<td>
								<p>Currency</p>
							</td>
						</tr>
						<tr>
							<td style={{"paddingRight": "20px"}}>
								<FormControl type="text" defaultValue="00.000.000,00" className="text-right"/>
							</td>
							<td>
								<FormControl componentClass="select">
									<option value="usd">USD (default)</option>
									<option value="eur">EUR</option>
								</FormControl>
							</td>
						</tr>
						<tr>
							<td className="text-right" style={{"paddingRight": "20px"}}><p><b>XX.XXX.XXX,XX €</b></p></td>
							<td></td>
						</tr>
						<tr>
							<td colSpan="2" className="text-right"><p><b>100 %</b> (share of the public hold)</p></td>
						</tr>
					</tbody>
				</table>

				<p>Description</p>

				<FormControl componentClass="textarea" style={{"height": "125px"}}/>

				<h4 className="text-center">
					Do you need to create additional restriction on this collateral?
				</h4>

				<p className="text-center">
					<Link to="/">
						<Button bsStyle="primary">Add sub-limit</Button>
					</Link>
				</p>

				<Link to="/" style={{"textDecoration": "none"}}>
					<p className="text-center text-danger">Remove collateral from the deal</p>
				</Link>

				<p className="text-center">
					<Link to="/"><Button bsStyle="primary">Update</Button></Link>
					<Link to="/"><Button bsStyle="default">Cancel</Button></Link>
				</p>

			</div>

		</div>
	);
}

export default CollateralDetailsComponent;