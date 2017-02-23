import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { LogoHorizontal } from 'bw-axiom';

export default class LogoExample extends Component {
  render() {
    return (
      <Example name="Horizontal">
        <Snippet>
          <LogoHorizontal height="3rem" />
        </Snippet>
      </Example>
    );
  }
}
