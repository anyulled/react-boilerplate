/**
 *
 * Panel
 *
 */
import React from "react";
import {Col, Panel, ButtonGroup, Button, Glyphicon, Label} from "react-bootstrap";

class MyPanel extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(...args) {
    super(...args);
    this.state = {
      open: true,
      size: 3
    };
  }

  render() {
    const header = <div>{this.props.name} <Label bsStyle="danger">Incomplete</Label>
      <div className="pull-right">
        <ButtonGroup>
          <Button onClick={ () => this.setState({open: !this.state.open})} bsSize="xs">
            <Glyphicon glyph="collapse-down"/>
          </Button>
          <Button onClick={ () => this.setState((prevState) => {
            return {size: prevState.size == 3 ? 6 : 3}
          })} bsSize="xs">
            <Glyphicon glyph="collapse-up"/>
          </Button>
        </ButtonGroup>
      </div>
    </div>;
    return (<Col sm={this.state.size}>
      <Panel header={header} collapsible expanded={this.state.open} draggable="true">
        {this.props.children}
      </Panel>
    </Col>);
  }
}

MyPanel.defaultProps = {
  name: "No name"
};

export default MyPanel;
