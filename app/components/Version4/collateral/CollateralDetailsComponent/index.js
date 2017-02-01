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

				<p style={{"marginTop": "10px"}}><b>Collateral held at DB</b></p>

				<table style={{"marginTop": "25px"}}>
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
							<td style={{"paddingRight": "20px", "paddingBottom": "20px"}}>
								<FormControl type="text" defaultValue="00.000.000,00" className="text-right" style={{"width":"150px"}}/>
							</td>
							<td style={{"paddingBottom": "20px"}}>
								<FormControl componentClass="select">
									<option value="usd">USD (default)</option>
									<option value="eur">EUR</option>
								</FormControl>
							</td>
						</tr>
						<tr>
							<td className="text-right" style={{"paddingRight": "20px", "paddingBottom": "10px"}}><p><b>XX.XXX.XXX,XX €</b></p></td>
							<td style={{"paddingBottom": "10px"}}></td>
						</tr>
						<tr>
							<td colSpan="2" className="text-right" style={{"paddingBottom": "20px"}}><p><b>100 %</b> (share of the public hold)</p></td>
						</tr>
					</tbody>
				</table>

				<p>Description</p>

				<FormControl componentClass="textarea" style={{"height": "125px"}}/>

				<h3 className="text-center text-muted" style={{"marginTop": "50px"}}>
					Do you need to create<br/>additional restriction on this collateral?
				</h3>

				<p className="text-center" style={{"marginTop": "20px"}}>
					<Link to="/">
						<Button bsStyle="primary" style={{"width": "120px"}}>Add sub-limit</Button>
					</Link>
				</p>

				<Link to="/" style={{"textDecoration": "none"}}>
					<p className="text-center text-danger" style={{"marginTop": "40px"}}>Remove collateral from the deal</p>
				</Link>

				<p className="text-center" style={{"marginTop": "70px"}}>
					<Link to="/"><Button bsStyle="primary" style={{"width": "120px"}}>Update</Button></Link>
					<Link to="/"><Button bsStyle="default" style={{"width": "120px"}}>Cancel</Button></Link>
				</p>

			</div>

		</div>
	);
}

export default CollateralDetailsComponent;