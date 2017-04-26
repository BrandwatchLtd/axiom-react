import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { getData } from './data';
import {
  DataPicker,
  DataPickerHeader,
  DataPickerBody,
  DataPickerMenu,
  DataPickerMenuItem,
  Grid,
  GridCell,
  Heading,
  Weak,
  longNumber,
} from 'bw-axiom';

export default class DataPickerExample extends Component {
  constructor() {
    super();
    this.state = {
      firstSelectedId: undefined,
      secondSelectedId: undefined,
      thirdSelectedId: undefined,
    };
  }

  onFirstMenuItemClick(id) {
    this.setState({ firstSelectedId: id });
  }

  onSecondMenuItemClick(id) {
    this.setState({ secondSelectedId: id });
  }

  onThirdMenuItemClick(id) {
    this.setState({ thirdSelectedId: id });
  }

  render() {
    const { firstSelectedId, secondSelectedId, thirdSelectedId } = this.state;
    const firstSelectedValue = getData().filter((query) => query.id === firstSelectedId)[0];
    const secondSelectedValue = getData().filter((query) => query.id === secondSelectedId)[0];
    const thirdSelectedValue = getData().filter((query) => query.id === thirdSelectedId)[0];
    const defaultText = 'Please select a value';
    const data = [{
      color: 'amber',
      id: firstSelectedId,
      onClick: this.onFirstMenuItemClick,
      value: firstSelectedValue,
    }, {
      color: 'blue',
      id: secondSelectedId,
      onClick: this.onSecondMenuItemClick,
      value: secondSelectedValue,
    }, {
      color: 'pink',
      id: thirdSelectedId,
      onClick: this.onThirdMenuItemClick,
      value: thirdSelectedValue,
    }];

    return (
      <Example name="Data Picker">
        <Snippet>
          <Grid gutters="tiny" snippetIgnore="ignore">
            { data.map(({ color, id, onClick, value }, i) => (
              <GridCell key={ id } snippetIgnore="ignore">
                <DataPicker isInactive={ !value }snippetSkip={ i > 0 }>
                  <DataPickerHeader
                      color={ color }
                      headerText={ value ? value.name : defaultText }>
                    <DataPickerMenu>
                      { getData().map(({ id, name }) => (
                        <DataPickerMenuItem
                            key={ id }
                            onClick={ onClick.bind(this, id) }>
                          { name }
                        </DataPickerMenuItem>
                      ))}
                    </DataPickerMenu>
                  </DataPickerHeader>

                  { value && <DataPickerBody>
                    <Heading style="headline"><Weak>
                      { longNumber(value.authors) }
                    </Weak></Heading>
                  </DataPickerBody> }
                </DataPicker>
              </GridCell>
            )
            ) }
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
