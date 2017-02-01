/**
*
* ExcludedInvestorsComponent
*
*/

import React, { PropTypes } from 'react';

import InvestorItem from '../InvestorItem';

function ExcludedInvestorsComponent(props) {
	if (props.excludedInvestors && props.excludedInvestors.length > 0) {
		const excludedInvestorsItems = props.excludedInvestors.map((item, key) =>
			<InvestorItem key={key} name={item.name} />
		);
		return (
			<div className="investor-panel">
				{excludedInvestorsItems}
				{props.children}
			</div>
		);
	}
	return (
		<div>
			<p className="text-center">No investors excluded.</p>
		</div>
	);

}

export default ExcludedInvestorsComponent;