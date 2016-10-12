import React, { Component } from 'react';
import LogoHorizontal from '../LogoHorizontal';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

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
