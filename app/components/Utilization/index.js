/**
 *
 * Utilization
 *
 */
import React from "react";
import Panel from "../Panel";

class Utilization extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Panel name="Utilization" onToggleSize={ this.props.onToggleSize }>
        empty panel
      </Panel>
    );
  }
}

export default Utilization;
