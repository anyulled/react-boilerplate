/*
 *
 * RightSidebarContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import RightSidebarComponent from '../../../components/Version4/RightSidebarComponent';

export class RightSidebarContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      visible: '',
      sidebarClass: '',
    };
  }

  componentDidMount = () => {
    this.sidebar(this.props.url);
  }

  componentWillUpdate = (nextProps) => {
    if (nextProps.url !== this.props.url) {
      this.sidebar(nextProps.url);
    }
  }

  sidebar = (url) => {
    switch (url) {
      case '/dealHeader':
        this.setState({
          visible: 'visible',
          sidebarClass: '',
        });
        break;
      case '/addSubmlimit':
        this.setState({
          visible: 'visible',
          sidebarClass: '',
        });
        break;
      case '/addProduct':
        this.setState({
          visible: 'visible',
          sidebarClass: 'product',
        });
        break;
      case '/productDetail':
        this.setState({
          visible: 'visible',
          sidebarClass: '',
        });
        break;
      case '/addCounterparty':
        this.setState({
          visible: 'visible',
          sidebarClass: 'product',
        });
        break;
      case '/addCurrencies':
        this.setState({
          visible: 'visible',
          sidebarClass: 'product',
        });
        break;
      case '/addBooking':
        this.setState({
          visible: 'visible',
          sidebarClass: 'product',
        });
        break;
      case '/collateralDetail':
        this.setState({
          visible: 'visible',
          sidebarClass: '',
        });
        break;
      case '/bookingDetail':
        this.setState({
          visible: 'visible',
          sidebarClass: '',
        });
        break;
      case '/excludeInvestor':
        this.setState({
          visible: 'visible',
          sidebarClass: 'product',
        });
        break;
      default:
        this.setState({
          visible: '',
          sidebarClass: '',
        });
    }
  }

  render() {
    return (
      <RightSidebarComponent
        visible={this.state.visible}
        sidebarClass={this.state.sidebarClass}
      >
        {this.props.children && React.cloneElement(this.props.children, {
          addDealHeaderInformation: this.props.addDealHeaderInformation,
        })}
      </RightSidebarComponent>
    );
  }
}

RightSidebarContainer.propTypes = {
  addDealHeaderInformation: PropTypes.func,
  children: PropTypes.object,
  url: PropTypes.string.isRequired,
  visible: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(RightSidebarContainer);
