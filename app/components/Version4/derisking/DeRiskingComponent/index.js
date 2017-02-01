/**
*
* DeRiskingComponent
*
*/

import React from 'react';
import { Link } from 'react-router';
import { Col, Row, FormControl, ButtonGroup, Button } from 'react-bootstrap';
import ExcludedInvestorsComponent from '../ExcludedInvestorsComponent';

function DeRiskingComponent() {
	const excludedInvestors = [
		{ name: 'investor1' },
		{ name: 'investor2' },
		{ name: 'investor3' },
	];
	return (
		<div className="derisking-component">
			<Row>
				<Col md={12}><p>De-Risking instructions / restrictions</p></Col>
			</Row>
			<Row>
			<Col md={10}>	
				<FormControl componentClass="textarea" style={{"height": "200px"}}/>
			</Col>
			<Col md={2}><small>(optional)</small></Col>
			</Row>

			<Row>
				<Col md={12} className="title"><p>Asset trading clause</p></Col>
			</Row>
			<Row>
				<Col md={12}>
					<ButtonGroup>
						<Button>Yes</Button>
						<Button>Upon client's consent</Button>
						<Button>No</Button>
					</ButtonGroup>
				</Col>
			</Row>

			<Row>
				<Col md={10} className="title"><p>Minimum investor rating required</p></Col>
			</Row>
			<Row>
				<Col md={3}>
					<FormControl componentClass="select">
						<option value="select"></option>
					</FormControl>
				</Col>
				<Col md={9}><small>(optional)</small></Col>
			</Row>

			<Row>
				<Col md={12} className="title"><p>Excluded investors</p></Col>
			</Row>
			<Row>
				<Col md={12}>
					<ExcludedInvestorsComponent excludedInvestors={excludedInvestors}>
						<Link to="/">
			            	<Button bsStyle="primary">Exclude investors</Button>
			            </Link>
					</ExcludedInvestorsComponent>
				</Col>
			</Row>
		</div>
	);
}

export default DeRiskingComponent;