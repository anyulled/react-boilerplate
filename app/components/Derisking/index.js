/**
 *
 * Derisking
 *
 */
import React, { PropTypes } from 'react';
import Panel from '../Panel';

class Derisking extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Panel name="De-risking" onToggleSize={this.props.onToggleSize}>
        empty panel
      </Panel>
    );
  }
}

Derisking.propTypes = {
  onToggleSize: PropTypes.func,
};

export default Derisking;
