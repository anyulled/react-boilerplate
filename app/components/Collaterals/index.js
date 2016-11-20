/**
 *
 * Collaterals
 *
 */
import React from "react";
import {Table, Button} from "react-bootstrap";
import {Link} from "react-router";
import Panel from "../Panel";

class Collaterals extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (<Panel name="Collaterals">
      <Table condensed bordered>
        <tbody>
        <tr>
          <th>
            <small>Num. Collaterals</small>
          </th>
          <th>
            <small>Total amount</small>
          </th>
        </tr>
        <tr>
          <td>42</td>
          <td rowSpan="3">
            <p>23.471.906,53 $</p>
            <p>20.875.310,88 €</p>
          </td>
        </tr>
        <tr>
          <th>
            <small>Share of DB public hold</small>
          </th>
        </tr>
        <tr>
          <td>88%</td>
        </tr>
        </tbody>
      </Table>
      <Button bsStyle="default" bsSize="small" block>Add new Collateral</Button>
      <Table condensed bordered>
        <tbody>
        <tr>
          <th>1.000.000 $</th>
          <td></td>
        </tr>
        <tr>
          <th>1.300.000 €</th>
          <td>23% of DB Public hold</td>
        </tr>
        <tr>
          <th>1.000.000 $</th>
          <td></td>
        </tr>
        <tr>
          <th>1.300.000 €</th>
          <td>23% of DB Public hold</td>
        </tr>
        </tbody>
      </Table>
      <p className="text-center"><Link>Show full list of Collaterals</Link></p>
    </Panel>);
  }
}

export default Collaterals;
