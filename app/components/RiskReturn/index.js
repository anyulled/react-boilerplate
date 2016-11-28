/**
 *
 * RiskReturn
 *
 */
import React from "react";
import Panel from "../Panel";

class RiskReturn extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Panel name="Risk Return" onToggleSize={ this.props.onToggleSize }>
        empty panel
      </Panel>
    );
  }
}

export default RiskReturn;
