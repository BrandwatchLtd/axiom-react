import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { getData } from './data';
import {
  DataPicker,
  DataPickerBody,
  DataPickerHeader,
  DropdownMenu,
  DropdownMenuItem,
  Heading,
  longNumber,
  Weak,
} from 'bw-axiom';

export default class DataPickerExample extends Component {
  constructor() {
    super();
    this.state = {
      selectedColor: undefined,
      selectedId: undefined,
    };
  }

  render() {
    const { selectedColor, selectedId } = this.state;
    const selected = getData().find(({ id }) => id === selectedId);

    return (
      <Example name="Clearable Data Picker">
        <Snippet>
          <DataPicker
              color={ selectedColor || (selected && selected.color) }
              disabledColors={ [ selectedColor ] }
              onClear={ () => this.setState({ selectedColor: undefined, selectedId: undefined }) }
              onSelectColor={ (color) => this.setState({ selectedColor: color }) }
              placeholder="Please select a value"
              value={ selected && selected.name }>
            <DataPickerHeader>
              <DropdownMenu snippetReplace={ true }>
                { getData().map(({ id, name }) => (
                  <DropdownMenuItem
                      key={ id }
                      onClick={ () => this.setState({ selectedId: id }) }>
                    { name }
                  </DropdownMenuItem>
                ) ) }
              </DropdownMenu>
            </DataPickerHeader>

            { selected && (
              <DataPickerBody snippetSkip={ true }>
                <Heading style="headline"><Weak>
                  { longNumber(selected.authors) }
                </Weak></Heading>
              </DataPickerBody>
            ) }
          </DataPicker>
        </Snippet>
      </Example>
    );
  }
}
