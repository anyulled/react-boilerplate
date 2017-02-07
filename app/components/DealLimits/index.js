/**
 *
 * DealLimits
 *
 */
import React, { PropTypes } from 'react';
import Panel from '../Panel';

class DealLimits extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Panel name="Deal Limits" onToggleSize={this.props.onToggleSize} >
        empty panel
      </Panel>
    );
  }
}

DealLimits.propTypes = {
  onToggleSize: PropTypes.func,
};

export default DealLimits;
