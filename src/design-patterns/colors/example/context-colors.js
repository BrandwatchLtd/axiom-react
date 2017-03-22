import React, { Component } from 'react';
import { Example } from 'style-guide';
import ColorSwatch from './ColorSwatch';

export default class ColorsExample extends Component {
  render() {
    const borderColors = [
      'color-context-border-subtle',
      'color-context-border',
    ];

    const backgroundColors = [
      'color-context-background',
      'color-context-background-disabled',
      'color-context-background-faded',
      'color-context-background-subtle',
    ];

    const textColors = [
      'color-context-text-disabled',
      'color-context-text-subtle',
      'color-context-text',
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
