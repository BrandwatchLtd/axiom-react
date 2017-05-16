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
    const defaultText = 'Please select a value';
    const data = [{
      color: 'amber',
      id: 0,
      value: firstSelectedValue,
    }, {
      color: 'blue',
      id: 1,
      value: secondSelectedValue,
    }, {
      color: 'pink',
      id: 2,
      value: thirdSelectedValue,
    }];

    return (
      <Example name="Data Picker">
        <Snippet>
          <Grid gutters="tiny" snippetIgnore="ignore">
            { data.map(({ color, id, value }, i) => (
              <GridCell key={ id } snippetIgnore="ignore">
                <DataPicker isInactive={ !value } snippetSkip={ i > 0 }>
                  <DataPickerHeader
                      color={ color }
                      headerText={ value ? value.name : defaultText }>
                    <DropdownMenu>
                      <DropdownMenuItem onClick={ () => this.onSelect(i, undefined) }>
                        Please select a value
                      </DropdownMenuItem>
                    </DropdownMenu>
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

                  { value && <DataPickerBody>
                    <Heading style="headline"><Weak>
                      { longNumber(value.authors) }
                    </Weak></Heading>
                  </DataPickerBody> }
                </DataPicker>
              </GridCell>
            ) ) }
          </Grid>
        </Snippet>

        <Snippet>
          <DataPicker isInactive={ true }>
            <DataPickerHeader
                color="pink"
                headerText="No values to choose from" />
          </DataPicker>
        </Snippet>
      </Example>
    );
  }
}
