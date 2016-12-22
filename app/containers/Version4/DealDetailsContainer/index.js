/*
 *
 * DealDetailsContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import DealDetailsComponent from '../../../components/Version4/DealDetailsComponent';

export class DealDetailsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      nickname: 'No nickname',
      nicknameHover: 'Add nickname',
      description: 'No description',
      descriptionHover: 'Add description',
      documents: 'No documents',
      documentsHover: 'Add documents',
      editFields: false,
    };
  }

  componentDidMount() {
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.props.onRef(null);
  }

  updateHeaderDeal = () => {
    this.setState({
      nickname: 'Nickname for the deal',
      nicknameHover: 'Edit nickname',
      description: 'Brief description for the underlying deal, placed in two lines but truncated because of the limited space',
      descriptionHover: 'Edit description',
      documents: 'See documents',
      documentsHover: 'See documents',
      editFields: true,
    });
  }

  render() {
    return (
      <DealDetailsComponent
        showSidebar={this.props.showSidebar}
        nickname={this.state.nickname}
        nicknameHover={this.state.nicknameHover}
        description={this.state.description}
        descriptionHover={this.state.descriptionHover}
        documents={this.state.documents}
        documentsHover={this.state.documentsHover}
        editFields={this.state.editFields}
      />
    );
  }
}

DealDetailsContainer.propTypes = {
  showSidebar: PropTypes.func.isRequired,
  onRef: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(DealDetailsContainer);
