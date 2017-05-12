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
    const defaultText = 'Please select a value';
    const selected = getData().find(({ id }) => id === selectedId);

    return (
      <Example name="Data Picker with ColorPicker">
        <Snippet>
          <DataPicker isInactive={ !selected } snippetIgnore={ true }>
            <DataPickerHeader
                color={ selectedColor || (selected && selected.color) }
                headerText={ selected ? selected.name : defaultText }
                onSelectColor={ (color) => this.setState({ selectedColor: color }) }>
              <DropdownMenu snippetSkip={ true }>
                <DropdownMenuItem onClick={ () => this.setState({ selectedId: undefined }) }>
                  Please select a value
                </DropdownMenuItem>
              </DropdownMenu>
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
