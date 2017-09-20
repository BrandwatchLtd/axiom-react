import React, { Component } from 'react';
import { Example } from 'style-guide';
import ColorSwatch from './ColorSwatch';

export default class ColorsExample extends Component {
  render() {
    const borderColors = [
      'context-border-subtle',
      'context-border',
    ];

    const backgroundColors = [
      'context-background',
      'context-background-active',
      'context-background-disabled',
      'context-background-faded',
      'context-background-subtle',
    ];

    const textColors = [
      'context-text-disabled',
      'context-text-subtle',
      'context-text',
    ];

    return (
      <Example name="Context">
        <ColorSwatch colors={ borderColors } />
        <ColorSwatch colors={ backgroundColors } />
        <ColorSwatch colors={ textColors } />
      </Example>
    );
  }
}
