/**
 *
 * Derisking
 *
 */
import React from "react";
import Panel from "../Panel";

class Derisking extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Panel name="De-risking" onToggleSize={ this.props.onToggleSize }>
        empty panel
      </Panel>
    );
  }
}

export default Derisking;
