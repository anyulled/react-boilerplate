import React, { PropTypes } from 'react';
import { Col, Row, FormControl, InputGroup, Glyphicon, ButtonGroup, Button } from 'react-bootstrap';

import ProductContainer from '../../../containers/Version4/ProductContainer';
import CounterpartyComponent from '../../../components/Version4/CounterpartyComponent';

export default class FieldsCellRenderer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Row>
        <Col md={this.props.data.colSize}>
          { this.props.data.type === 'select' &&
            <FormControl componentClass="select">
              <option value="select"></option>
            </FormControl>
          }

          { this.props.data.type === 'text' &&
            <FormControl type="text" />
          }

          { this.props.data.type === 'date' &&
            <InputGroup>
              <FormControl type="text" />
              <InputGroup.Addon>
                <Glyphicon glyph="calendar" />
              </InputGroup.Addon>
            </InputGroup>
          }

          { this.props.data.type === 'toogleButton' &&
            <ButtonGroup>
              <Button>No</Button>
              <Button bsStyle="success">Yes</Button>
            </ButtonGroup>
          }

          { this.props.data.type === 'products' &&
            <ProductContainer
              title="Products"
            />
          }

          { this.props.data.type === 'counterparties' &&
            <CounterpartyComponent
              title="Counterparty"
            />
          }
        </Col>

        { this.props.data.optional &&
          <Col md={12 - this.props.data.colSize}>
            <small>(optional)</small>
          </Col>
        }
      </Row>
    );
  }

}

FieldsCellRenderer.propTypes = {
  colSize: PropTypes.number,
  data: PropTypes.object,
  type: PropTypes.string,
};
