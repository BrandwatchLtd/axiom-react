import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { getData } from './data';
import {
  DataPicker,
  DataPickerBody,
  DataPickerHeader,
  DropdownMenu,
  DropdownMenuItem,
  Grid,
  GridCell,
  Heading,
  longNumber,
  Weak,
} from 'bw-axiom';

export default class DataPickerExample extends Component {
  constructor() {
    super();
    this.state = {
      selectedIds: Array(3),
    };
  }

  onSelect (selectedIdsIndex, id) {
    this.setState(state => {
      state.selectedIds[selectedIdsIndex] = id;
      return state;
    });
  }

  render() {
    const { selectedIds } = this.state;
    const firstSelectedValue = getData().filter((query) => query.id === selectedIds[0])[0];
    const secondSelectedValue = getData().filter((query) => query.id === selectedIds[1])[0];
    const thirdSelectedValue = getData().filter((query) => query.id === selectedIds[2])[0];
    const data = [{
      id: 0,
      value: firstSelectedValue,
    }, {
      id: 1,
      value: secondSelectedValue,
    }, {
      id: 2,
      value: thirdSelectedValue,
    }];

    return (
      <Example name="Data Picker">
        <Snippet>
          <Grid gutters="tiny" snippetIgnore={ true }>
            { data.map(({ color, id, value }, i) => (
              <GridCell key={ id } snippetIgnore={ true }>
                <DataPicker
                    color={ value && value.color }
                    placeholder="Please select a value"
                    snippetSkip={ i > 0 }
                    value={ value && value.name }>
                  <DataPickerHeader>
                    <DropdownMenu>
                      { getData().map(({ id, name }) => (
                        <DropdownMenuItem
                            key={ id }
                            onClick={ () => this.onSelect(i, id) }>
                          { name }
                        </DropdownMenuItem>
                      ) ) }
                    </DropdownMenu>
                  </DataPickerHeader>

                  { value && (
                    <DataPickerBody>
                      <Heading snippetReplace={ true } style="headline"><Weak>
                        { longNumber(value.authors) }
                      </Weak></Heading>
                    </DataPickerBody>
                  ) }
                </DataPicker>
              </GridCell>
            ) ) }
          </Grid>
        </Snippet>
      </Example>
    );
  }
}
