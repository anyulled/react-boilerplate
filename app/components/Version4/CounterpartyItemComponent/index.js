/**
*
* CounterpartyItemComponent
*
*/

import React, { PropTypes } from 'react';
import { Panel, ButtonGroup, Button } from 'react-bootstrap';

function CounterpartyItemComponent(props) {
  let message;
  if (props.emptyGuarantor) {
    message = <span>No Guarantor was added to this Client yet. <i>Optional</i>.</span>;
  }

  if (props.emptyObligors) {
    message = <span>No Obligors were added to this Client yet. At least one is <u>mandatory</u>.</span>;
  }

  return (
    <div className="category counterparty-panel">
      {props.title &&
        <p>{props.title}</p>
      }

      {!(props.emptyGuarantor || props.emptyObligors) &&
        <Panel>
          Paragon ID Paragon Name (if it is too long ...
          <ul>
            <li>
              Country
            </li>
            <li>
              CR: iA
            </li>
            {props.btnGroup &&
              <li>
                <ButtonGroup>
                  <Button bsStyle="default">No</Button>
                  <Button bsStyle="success">Joint...</Button>
                </ButtonGroup>
              </li>
            }
            <li>
              Remove
            </li>
          </ul>
        </Panel>
      }

      {(props.emptyGuarantor || props.emptyObligors) &&
        <Panel className="empty">
          {message}
        </Panel>
      }

      {props.children}

    </div>
  );
}

CounterpartyItemComponent.propTypes = {
  btnGroup: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  emptyGuarantor: PropTypes.bool,
  emptyObligors: PropTypes.bool,
  title: PropTypes.string,
};

export default CounterpartyItemComponent;
