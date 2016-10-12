import React, { Component } from 'react';
import LogoVertical from '../LogoVertical';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

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
