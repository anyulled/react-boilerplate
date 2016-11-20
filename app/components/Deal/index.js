/**
 *
 * Deal
 *
 */
import React from "react";
import {Table, Button, ButtonGroup, Glyphicon} from "react-bootstrap";
import {Link} from "react-router";
import Panel from "../Panel";

class Deal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Panel name="Deal 2016_0001">
        <Table>
          <tbody>
          <tr>
            <td colSpan="2">
              <small>Deal Nickname</small>
              <h4>Deal nickname 50 chr long in 2 lines and big font. <Link to="/"><Glyphicon glyph="edit"/></Link>
              </h4>
            </td>
          </tr>
          <tr>
            <th>Status</th>
            <td><strong>Deal in draft mode</strong> <Link to="/"><Glyphicon glyph="edit"/></Link></td>
          </tr>
          <tr>
            <th>Exposure Status</th>
            <td>
              <strong>Performing</strong> <Link to="/"><Glyphicon glyph="edit"/></Link>
              <p><Link to="/">Add termination date</Link></p>
              <p><Link to="/">Select confidence degre</Link></p>
              <p><Link to="/">Add pipeline ID</Link>(optional)</p>
            </td>
          </tr>
          <tr>
            <th>Deal Logged</th>
            <td>
              <ButtonGroup bsSize="xs">
                <Button>NO</Button>
                <Button bsStyle="success" active>YES</Button>
              </ButtonGroup>
            </td>
          </tr>
          <tr>
            <th>Owner</th>
            <td>
              <Glyphicon glyph="user"/>
              <Link to="/"> <strong>Alfonsiu Bartolomeu</strong></Link>
            </td>
          </tr>
          <tr>
            <th>Collaborators</th>
            <td>
              <Glyphicon glyph="user"/>
              <Link to="/"> Show all collaborators</Link>
            </td>
          </tr>
          </tbody>
        </Table>
        <Button bsStyle="primary" bsSize="small" block>Add new Collaborator</Button>
      </Panel>
    );
  }
}

export default Deal;
