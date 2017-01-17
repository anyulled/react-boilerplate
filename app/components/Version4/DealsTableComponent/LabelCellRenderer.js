import React, { PropTypes } from 'react';
// import RefData from './RefData';

export default class LabelCellRender extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="rag-element">
        {this.props.data.label.text}
      </div>
    );
  }
}

LabelCellRender.propTypes = {
  data: PropTypes.object,
};
