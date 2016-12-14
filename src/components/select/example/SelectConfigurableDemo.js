import React, { Component } from 'react';
import { CodeSnippet, Example } from 'style-guide';
import { Grid, GridCell, CheckBox, RadioButton, TextInput, Select, Heading } from 'bw-axiom';

export default class SelectConfigurableDemo extends Component {

  componentWillMount() {
    this.setState({
      selection: null,
      dataType: 'string',
      hideSelected: false,
      maxHeight: 200,
      multiselect: false,
      initialSelection: true,
    });
  }

  toggleMultiselect() {
    const { multiselect } = this.state;
    this.setState({
      multiselect: !multiselect,
      selection: !multiselect ? [] : null,
    });
  }

  updateDataType(dataType) {
    const { multiselect } = this.state;
    this.setState({
      dataType,
      selection: multiselect ? [] : null,
    });
  }

  updateMaxHeight(event) {
    const value = parseInt(event.target.value, 10);
    this.setState({ maxHeight: isNaN(value) ? 200 : value });
  }

  render() {
    const {
      dataType,
      hideSelected,
      maxHeight,
      multiselect,
      selection,
    } = this.state;

    const isObject = dataType === 'object';
    const isString = dataType === 'string';

    const objectItems = [
      { id: 'a1', name: 'Apple' },
      { id: 'a2', name: 'Pears' },
      { id: 'a3', name: 'Oranges' },
      { id: 'a4', name: 'Bananas' },
      { id: 'a5', name: 'Pineapple' },
      { id: 'a6', name: 'Mango' },
      { id: 'a7', name: 'Dragon fruit' },
      { id: 'a8', name: 'Grapes' },
      { id: 'a9', name: 'Kiwi' },
      { id: 'a10', name: 'Cherry' },
      { id: 'a11', name: 'Raspberry' },
      { id: 'a12', name: 'Blackberry' },
      { id: 'a13', name: 'Blueberry' },
      { id: 'a14', name: 'Funkyberry' },
    ];

    const stringItems = objectItems.map(({ name }) => name);

    const selectConfig = {
      displayValue: isObject ? ({ name }) => name : undefined,
      hideSelected,
      identifier: isObject ? ({ id }) => id : undefined,
      items: isObject ? objectItems : stringItems,
      maxHeight,
      multiselect,
      onSelect: (selection) => this.setState({ selection }),
      placeholder: 'Select one of your 5-a-day!',
      selection,
    };

    return (
      <Example name="Select">
        <Grid gutters="large">
          <GridCell>
            <Select { ...selectConfig } />

            <Heading>Selected value</Heading>
            <CodeSnippet language="js">{ `${JSON.stringify(selection)}` }</CodeSnippet>

            <Heading>Current props config</Heading>
            <CodeSnippet language="js">{ `${JSON.stringify(selectConfig)}` }</CodeSnippet>
          </GridCell>

          <GridCell shrink={ true }>
            <Heading>Data type options</Heading>

            <RadioButton
                checked={ isString }
                onChange={ () => this.updateDataType('string') }>
              Array of strings
            </RadioButton>

            <RadioButton
                checked={ isObject }
                onChange={ () => this.updateDataType('object') }>
              Array of objects
            </RadioButton>

            <Heading>Config</Heading>

            <CheckBox
                checked={ multiselect }
                onChange={ ::this.toggleMultiselect }>
              With multiple selection?
            </CheckBox>

            <CheckBox
                checked={ hideSelected }
                onChange={ () => this.setState({ hideSelected: !hideSelected }) }>
              Hide selected items?
            </CheckBox>

            <TextInput
                label="Max menu height"
                onChange={ ::this.updateMaxHeight }
                value={ maxHeight } />
          </GridCell>
        </Grid>
      </Example>
    );
  }
}
