import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
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
import { getData } from './data';

class DataPickerExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      DataPicker: PropTypes.object.isRequired,
      DataPickerBody: PropTypes.object.isRequired,
      DataPickerHeader: PropTypes.object.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedColor: undefined,
      selectedId: undefined,
    };
  }

  render() {
    const { components } = this.props;
    const { selectedColor, selectedId } = this.state;
    const selected = getData().find(({ id }) => id === selectedId);

    const propTypes = {
      DataPicker: components.DataPicker,
      DataPickerBody: components.DataPickerBody,
      DataPickerHeader: components.DataPickerHeader,
    };

    const initialProps = {
      DataPicker: {
        color: selectedColor || (selected && selected.color),
        disabledColors: [ selectedColor ],
        onClear: () => this.setState({ selectedColor: undefined, selectedId: undefined }),
        onColorPickerOpen: () => {},
        onSelectColor: (color) => this.setState({ selectedColor: color }),
        placeholder: 'Please select a value',
        value: selected && selected.name,
      },
    };

    return (
      <ExampleConfig
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <DataPicker { ...initialProps.DataPicker }>
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
              <Heading style="headline">
                <Weak>{ longNumber(selected.authors) }</Weak>
              </Heading>
            </DataPickerBody>
          ) }
        </DataPicker>
      </ExampleConfig>
    );
  }
}

module.exports = [
  DataPickerExample,
];
