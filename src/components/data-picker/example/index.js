import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import DataPicker from '../DataPicker';
import DataPickerDropdown from '../DataPickerDropdown';
import DataPickerMeta from '../DataPickerMeta';
import DropdownMenu from '../../dropdown/DropdownMenu';
import DropdownMenuItem from '../../dropdown/DropdownMenuItem';
import Grid from '../../grid/Grid';
import GridCell from '../../grid/GridCell';
import Icon from '../../icon/Icon';
import Small from '../../typography/Small';

class DataPickerExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      DataPicker: PropTypes.object.isRequired,
      DataPickerDropdown: PropTypes.object.isRequired,
      DataPickerMeta: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const withDropdown = (
      <DataPickerDropdown key="dropdown">
        <DropdownMenu>
          <DropdownMenuItem disabled>
            Clear Selection
          </DropdownMenuItem>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuItem onClick={ () => {} }>
            Consectetur adipiscing elit
          </DropdownMenuItem>

          <DropdownMenuItem onClick={ () => {} } selected>
            Lorem ipsum dolar sit amet
          </DropdownMenuItem>

          <DropdownMenuItem onClick={ () => {} }>
            Etiam eget diam faucibus
          </DropdownMenuItem>
        </DropdownMenu>
      </DataPickerDropdown>
    );

    const withMeta = (
      <DataPickerMeta key="meta">
        <Grid gutters="tiny" responsive={ false } textColor="subtle" verticalAlign="middle">
          <GridCell shrink>
            <Icon name="followers" />
          </GridCell>

          <GridCell>
            <Small textStrong>4.1k</Small>
          </GridCell>
        </Grid>
      </DataPickerMeta>
    );


    const withDropdownAndMeta = [
      withDropdown,
      withMeta,
    ];

    const propTypes = {
      DataPicker: components.DataPicker,
      DataPickerDropdown: components.DataPickerDropdown,
      DataPickerMeta: components.DataPickerMeta,
    };

    const initialProps = {
      DataPicker: {
        color: 'new-horizon',
        disabledColors: ['new-horizon'],
        onColorPickerOpen: () => {},
        onSelectColor: () => {},
        placeholder: 'Please select a value',
        value: 'Lorem ipsum dolar sit amet',
      },
    };

    const initialPropOptions = {
      DataPicker: {
        children: {
          options: [{
            name: 'With dropdown',
            children: withDropdown,
          }, {
            name: 'With meta (no dropdown)',
            children: withMeta,
          }, {
            name: 'With dropdown and meta',
            children: withDropdownAndMeta,
          }],
        },
      },
    };

    return (
      <ExampleConfig
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <DataPicker { ...initialProps.DataPicker }>
          { withDropdownAndMeta }
        </DataPicker>
      </ExampleConfig>
    );
  }
}

export default [
  DataPickerExample,
];
