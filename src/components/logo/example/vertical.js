import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { LogoVertical } from 'bw-axiom';

export default class LogoExample extends Component {
  render() {
    return (
      <Example name="Vertical">
        <Snippet>
          <LogoVertical width="12rem" />
          <LogoVertical height="4rem" />
        </Snippet>
      </Example>
    );
  }
}
