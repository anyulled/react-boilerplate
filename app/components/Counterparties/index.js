/**
 *
 * Counterparties
 *
 */
import React from "react";
import {Label, Table, Button, ButtonGroup} from "react-bootstrap";
import {Link} from "react-router";
import Panel from "../Panel";

class Counterparties extends React.Component { // eslint-disable-line react/prefer-stateless-function
 constructor(props){
    super(props);
  }
  render() {
    return (<Panel name="Counterparties" onToggleSize={ this.props.onToggleSize }>
      <Button bsStyle="primary" bsSize="small" block>Add new Client</Button>
      <Table condensed>
        <tbody>
        <tr>
          <th colSpan="2">
            <small>Main Client</small>
          </th>
        </tr>
        <tr>
          <td colSpan="2">Client Name</td>
        </tr>
        <tr>
          <td colSpan="2">client-id-sequence</td>
        </tr>
        <tr>
          <td colSpan="2">Germany</td>
        </tr>
        <tr>
          <th>
            <small>Client is obligor?</small>
          </th>
          <td>
            <ButtonGroup bsSize="xs">
              <Button bsStyle="danger" active>NO</Button>
              <Button>YES</Button>
            </ButtonGroup>
          </td>
        </tr>
        </tbody>
      </Table>
      <hr/>
      <Table>
        <tbody>
        <tr>
          <th>
            <small>Obligors</small>
          </th>
          <td><Label bsStyle="danger">Not in directory. Validation needed</Label></td>
        </tr>
        <tr>
          <td colSpan="2"><Link>Show (7) obligors</Link></td>
        </tr>
        </tbody>
      </Table>
      <Button bsSize="small" block>Add new Obligor</Button>
    </Panel>);
  }
}

export default Counterparties;
