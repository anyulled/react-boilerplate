/**
 *
 * Utilization
 *
 */
import React, { PropTypes } from 'react';
import Panel from '../Panel';

class Utilization extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Panel name="Utilization" onToggleSize={this.props.onToggleSize}>
        empty panel
      </Panel>
    );
  }
}

Utilization.propTypes = {
  onToggleSize: PropTypes.func,
};

export default Utilization;
