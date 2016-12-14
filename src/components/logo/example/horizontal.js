import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { LogoHorizontal } from 'bw-axiom';

export default class LogoExample extends Component {
  render() {
    return (
      <Example name="Horizontal">
        <Snippet>
          <LogoHorizontal width={ 200 } />
          <LogoHorizontal height={ 50 } />
        </Snippet>
      </Example>
    );
  }
}
