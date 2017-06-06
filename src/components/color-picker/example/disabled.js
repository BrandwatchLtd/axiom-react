import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { ColorPicker } from 'bw-axiom';

export default class DisabledColorPickerExample extends Component {
  constructor(props) {
    super(props);
    this.disabledColors = ['rose', 'purple', 'teal', 'chartreuse', 'amber', 'brown'];
    this.state = {
      currentColor: undefined,
    };
    this.boundOnSelectColor = this.onSelectColor.bind(this);
  }

  onSelectColor(color) {
    this.setState({
      currentColor: color,
    });
  }

  render() {
    const { currentColor } = this.state;

    return (
      <Example name="Color Picker (with disabled options)">
        <Snippet>
          <ColorPicker
              disabledOptions={ [ ...this.disabledColors, currentColor ] }
              onSelectColor={ this.boundOnSelectColor }
              selected={ currentColor } />
        </Snippet>
      </Example>
    );
  }
}

