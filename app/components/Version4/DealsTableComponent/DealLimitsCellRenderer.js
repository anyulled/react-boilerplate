import React, { PropTypes } from 'react';
import { Col, Row, FormControl, InputGroup, Glyphicon, ButtonGroup, Button } from 'react-bootstrap';

import ProductContainer from '../../../containers/Version4/ProductContainer';
import CounterpartyComponent from '../../../components/Version4/CounterpartyComponent';

export default class DealLimitsCellRenderer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    // console.log('FieldsCellRenderer mounted');
    // We must calculate the highest column on the row and re-render
  }
  render() {
    const column = this.props.colDef.field;
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
            <ButtonGroup>
              <Button>No</Button>
              <Button bsStyle="success">Yes</Button>
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
        </Col>

        { this.props.data[column].optional &&
          <Col md={12 - this.props.data.colSize}>
            <small>(optional)</small>
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

