import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Col, Row, FormControl, InputGroup, Glyphicon, ButtonGroup, Button, Radio, Checkbox } from 'react-bootstrap';

import ProductContainer from '../../../containers/Version4/ProductContainer';
import CounterpartyComponent from '../../../components/Version4/CounterpartyComponent';
import AllowedCurrenciesComponent from '../../../components/Version4/AllowedCurrenciesComponent';

export default class DealLimitsCellRenderer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const column = this.props.colDef.field;

    // TODO: Create a new component
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

          { this.props.data[column].element === 'date' &&
            <InputGroup>
              <FormControl type="text" />
              <InputGroup.Addon>
                <Glyphicon glyph="calendar" />
              </InputGroup.Addon>
            </InputGroup>
          }

          { this.props.data[column].element === 'toogleButton' &&
            // TODO: Create a new component
            <ButtonGroup>
              {listButton}
            </ButtonGroup>
          }

          { this.props.data[column].element === 'productsComponent' &&
            <ProductContainer
              title="Products"
              productsAdded={this.props.data[column].productsAdded}
            />
          }

          { this.props.data[column].element === 'counterpartiesComponent' &&
            <CounterpartyComponent
              title="Counterparty"
              counterpartyAdded={this.props.data[column].counterpartyAdded}
            />
          }

          { this.props.data[column].element === 'radio3' &&
            // TODO: Create a new component
            <div className="radio-group">
              <Radio name="termination_notice"> <FormControl type="text" /> <span className="text">days in advance</span></Radio>
              <Radio name="termination_notice">...at DBs discretion</Radio>
              <Radio name="termination_notice">...at expected deal end</Radio>
            </div>
          }

          { this.props.data[column].element === 'radio2' &&
            // TODO: Create a new component
            <div className="radio-group">
              <Radio name="termination_notice">
                <span className="text">Max tenor</span>
                <FormControl type="text" />
                <span className="text">days</span>
              </Radio>

              <Radio name="termination_notice">
                <span className="text">Max / Final maturity</span>
                <InputGroup>
                  <FormControl type="text" className="date" />
                  <InputGroup.Addon>
                    <Glyphicon glyph="calendar" />
                  </InputGroup.Addon>
                </InputGroup>
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
              <AllowedCurrenciesComponent currencies={this.props.data[column].currencies} />
              <p className="text-center">
                <Link to="/addCurrencies">
                  <Button bsStyle="primary">Add currencies</Button>
                </Link>
              </p>
            </div>
          }

          { this.props.data[column].element === 'amountText' &&
            // TODO: create a new component
            <div className="amount-text">
              <FormControl type="text" /> <b>€</b>
              <span>XX.XXX.XXX,XX €</span>
            </div>
          }

          { this.props.data[column].element === 'amortisationDateComponent' &&
            // TODO: create a new component
            <div className="amortisation-date">
              <InputGroup>
                <FormControl type="text" />
                <InputGroup.Addon>
                  <Glyphicon glyph="calendar" />
                </InputGroup.Addon>
              </InputGroup>
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

