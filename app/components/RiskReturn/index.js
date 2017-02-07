/**
 *
 * RiskReturn
 *
 */
import React, { PropTypes } from 'react';
import Panel from '../Panel';

class RiskReturn extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Panel name="Risk Return" onToggleSize={this.props.onToggleSize}>
        empty panel
      </Panel>
    );
  }
}

RiskReturn.propTypes = {
  onToggleSize: PropTypes.func,
};

export default RiskReturn;
