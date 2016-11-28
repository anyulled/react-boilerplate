/**
 *
 * Contacts
 *
 */
import React from "react";
import {Label, Table, Button, Glyphicon} from "react-bootstrap";
import {Link} from "react-router";
import Panel from "../Panel";

class Contacts extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
  }
  render() {
    return (<Panel name="Contacts"  onToggleSize={ this.props.onToggleSize } >
      <Button bsStyle="primary" bsSize="small" block>Add new Contact</Button>
      <Table condensed bordered>
        <tbody>
        <tr>
          <th colSpan="3">
            <div className="pull-right"><Link>see 4 more</Link></div>
            <h5>Sales</h5>
          </th>
        </tr>
        <tr>
          <th>Alfonsiu Bartolomeu</th>
          <td>TF Comp</td>
          <td>EMEA Ex Germany</td>
        </tr>
        <tr>
          <th colSpan="3"><h5>Structuring</h5></th>
        </tr>
        <tr>
          <td colSpan="3"><p className="text-center"><Glyphicon glyph="user"/> <Link>Empty, please add</Link></p></td>
        </tr>
        <tr>
          <th colSpan="3"><h5>TF Deal Managment</h5></th>
        </tr>
        <tr>
          <td colSpan="3"><p className="text-center"><Glyphicon glyph="user"/> <Link>Empty, please add</Link></p></td>
        </tr>
        <tr>
          <th colSpan="3"><h5>CRM (Client and Obligor)</h5></th>
        </tr>
        <tr>
          <td colSpan="3"><p className="text-center"><Glyphicon glyph="user"/> <Link>Empty, please add</Link></p></td>
        </tr>
        <tr>
          <th colSpan="3"><h5>Operations (GTO)</h5></th>
        </tr>
        <tr>
          <td colSpan="3">
            <p className="text-center">
              <Glyphicon glyph="user"/> <Link>Empty, please add </Link>
              <Label bsStyle="danger">Mandatory</Label>
            </p>
          </td>
        </tr>
        </tbody>
      </Table>
      <p className="text-center"><Link>Show full list of Contacts</Link></p>
    </Panel>);
  }
}

export default Contacts;
