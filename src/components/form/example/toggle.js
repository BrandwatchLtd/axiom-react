import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Toggle } from 'bw-axiom';

export default class ToggleExample extends Component {
  constructor (props) {
    super(props);
    this.state = { toggled: false };
    this.onToggle = () => this.setState(({ toggled }) => ({ toggled: !toggled }));
  }

  render() {
    return (
      <Example name="Toggle">
        <Snippet>
          <Toggle onToggle={ this.onToggle } toggled={ this.state.toggled } />
        </Snippet>
      </Example>
    );
  }
}
