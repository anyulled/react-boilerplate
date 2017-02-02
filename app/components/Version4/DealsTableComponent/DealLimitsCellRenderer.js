import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Col, Row, FormControl, ButtonGroup, Button, Radio, Checkbox } from 'react-bootstrap';

import ProductComponent from '../products/ProductComponent';

import CounterpartyComponent from '../counterparty/CounterpartyComponent';

import BookingComponent from '../booking/BookingComponent';

import CollateralComponent from '../collateral/CollateralComponent';

import ExcludedInvestorsComponent from '../derisking/ExcludedInvestorsComponent';

import PanelItemComponent from '../common/PanelItemComponent';
import DateField from '../common/DateField';

export default class DealLimitsCellRenderer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const column = this.props.colDef.field;

    let listButton = [];
    if (this.props.data[column].buttonsValues) {
      listButton = this.props.data[column].buttonsValues.map((item, key) =>
        <Button key={key} bsStyle={(item.active) ? 'success' : 'default'}>{item.value}</Button>
      );
    }

    return (
      <Row>
        <Col md={this.props.data[column].colSize}>
          { this.props.data[column].element === 'select' &&
            <FormControl componentClass="select">
              <option value="select"></option>
            </FormControl>
          }

          { this.props.data[column].element === 'text' &&
            <FormControl type="text" />
          }

          {
            this.props.data[column].element === 'textarea' &&
            <FormControl componentClass="textarea" style={{ height: '200px' }} />
          }

          { this.props.data[column].element === 'date' &&
            <DateField />
          }

          { this.props.data[column].element === 'toogleButton' &&
            <ButtonGroup> {listButton} </ButtonGroup>
          }

          { this.props.data[column].element === 'productsComponent' &&
            <ProductComponent products={this.props.data[column].products}>
              <p className="text-center">
                <Link to="/addProduct">
                  <Button bsStyle="primary">Add product(s)</Button>
                </Link>
              </p>
            </ProductComponent>
          }

          { this.props.data[column].element === 'counterpartiesComponent' &&
            <CounterpartyComponent
              title="Counterparty"
              counterpartyAdded={this.props.data[column].counterpartyAdded}
            />
          }

          { this.props.data[column].element === 'excludedInvestorsComponent' &&
            <ExcludedInvestorsComponent excludedInvestors={this.props.data[column].excludedInvestors}>
              <Link to="/">
                <Button bsStyle="primary">Exclude investors</Button>
              </Link>
            </ExcludedInvestorsComponent>
          }

          { this.props.data[column].element === 'radio3' &&
            <div className="radio-group">
              <Radio name="termination_notice"> <FormControl type="text" /> <span className="text">days in advance</span></Radio>
              <Radio name="termination_notice">...at DBs discretion</Radio>
              <Radio name="termination_notice">...at expected deal end</Radio>
            </div>
          }

          { this.props.data[column].element === 'radio2' &&
            <div className="radio-group">
              <Radio name="termination_notice">
                <span className="text">Max tenor</span>
                <FormControl type="text" />
                <span className="text">days</span>
              </Radio>

              <Radio name="termination_notice">
                <span className="text">Max / Final maturity</span>
                <DateField />
              </Radio>
            </div>
          }

          { this.props.data[column].element === 'readOnly' &&
            <b className="col-md-12 readOnly">{this.props.data[column].value}</b>
          }

          { this.props.data[column].element === 'splitLine' &&
            <hr />
          }

          { this.props.data[column].element === 'allowedCurrenciesComponent' &&
            <div>
              <PanelItemComponent arrayList={this.props.data[column].currencies} />
              <p className="text-center">
                <Link to="/addCurrencies">
                  <Button bsStyle="primary">Add currencies</Button>
                </Link>
              </p>
            </div>
          }

          { this.props.data[column].element === 'amountText' &&
            <div className="amount-text">
              <FormControl type="text" /> <b>€</b>
              <span>XX.XXX.XXX,XX €</span>
            </div>
          }

          { this.props.data[column].element === 'amortisationDateComponent' &&
            <div className="amortisation-date">
              <DateField />
              <Checkbox>
                Not applicable
              </Checkbox>
              <p className="text-center">
                <Button bsStyle="info">
                  Additional date
                </Button>
              </p>
              <i>
                * To add an additional amortisation date will be mandatory to provide new limit amounts. Hence new sub-limit will be created.
              </i>
            </div>
          }

          { this.props.data[column].element === 'bookingComponent' &&
            <BookingComponent bookingList={this.props.data[column].booking_list}>
              <p className="text-center">
                <Link to="/addBooking">
                  <Button bsStyle="primary">Add booking entities</Button>
                </Link>
              </p>
            </BookingComponent>
          }

          { this.props.data[column].element === 'collateralComponent' &&
            <CollateralComponent collateralList={this.props.data[column].collateral_list}>
              <p className="text-center">
                <Link to="/addCollateral">
                  <Button bsStyle="primary">Add collateral</Button>
                </Link>
              </p>
            </CollateralComponent>
          }
        </Col>

        { this.props.data[column].optional &&
          <Col md={12 - this.props.data.colSize}>
            <small>{this.props.data[column].optional}</small>
          </Col>
        }
      </Row>
    );
  }

}

DealLimitsCellRenderer.propTypes = {
  colDef: PropTypes.object,
  colSize: PropTypes.number,
  data: PropTypes.object,
};

