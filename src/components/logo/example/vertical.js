import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { LogoVertical } from 'bw-axiom';

export default class LogoExample extends Component {
  render() {
    return (
      <Example name="Vertical">
        <Snippet>
          <LogoVertical width={ 200 } />
          <LogoVertical height={ 50 } />
        </Snippet>
      </Example>
    );
  }
}
