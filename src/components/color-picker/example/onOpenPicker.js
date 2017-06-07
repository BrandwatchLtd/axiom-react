import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { ColorPicker } from 'bw-axiom';

export default class ColorPickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: undefined,
    };
  }

  onSelectColor(color) {
    window.alert('color selected');
    this.setState({
      currentColor: color,
    });
  }

  render() {
    const { currentColor } = this.state;

    return (
      <Example name="Color Picker (event handlers)">
        <Snippet>
          <ColorPicker
              disabledOptions={ [currentColor] }
              onOpen={ () => window.alert('picker opened!') }
              onSelectColor={ this.onSelectColor.bind(this) }
              selected={ currentColor } />
        </Snippet>
      </Example>
    );
  }
}

