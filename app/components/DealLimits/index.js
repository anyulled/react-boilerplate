/**
 *
 * DealLimits
 *
 */
import React from "react";
import Panel from "../Panel";

class DealLimits extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Panel name="Deal Limits" onToggleSize={ this.props.onToggleSize } >
        empty panel
      </Panel>
    );
  }
}

export default DealLimits;
