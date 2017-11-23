import React, { Component } from 'react';
import { Example } from 'style-guide';
import ColorSwatch from './ColorSwatch';

export default class ColorsExample extends Component {
  render() {
    return (
      <Example name="External Colors">
        <ColorSwatch colors={ [
          { name: 'Twitter', variable: 'external-twitter-blue' },
        ] } name="Companies" />
      </Example>
    );
  }
}
