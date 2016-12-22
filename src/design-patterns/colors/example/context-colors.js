import React, { Component } from 'react';
import { Example } from 'style-guide';
import ColorSwatch from './ColorSwatch';

export default class ColorsExample extends Component {
  render() {
    const brandColors = [
      'color-context-disabled-background',
      'color-context-component-border',
      'color-context-disabled-text',
      'color-context-subtle-text',
      'color-context-standard-text',
    ];

    return (
      <Example name="Context">
        <ColorSwatch colors={ brandColors } />
      </Example>
    );
  }
}
