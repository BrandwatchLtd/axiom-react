import React, { Component } from 'react';
import {
  DataPicker,
  DataPickerDropdown,
  DataPickerMeta,
  DropdownMenu,
  DropdownMenuItem,
  Grid,
  GridCell,
  Icon,
  Small,
} from '@brandwatch/axiom-components';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <DocumentationShowCase centeredVertical>
          <DataPicker
              color="new-horizon"
              onSelectColor={ (setValue, getValue, color) => setValue('DataPicker', 'color', color) }
              placeholder="Please select a value">
            <DataPickerDropdown>
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

            <DataPickerMeta>
              <Grid
                  gutters="tiny"
                  none
                  responsive={ false }
                  textColor="subtle"
                  verticalAlign="middle"
                  wrap={ false }>
                <GridCell>
                  <Icon name="followers" />
                </GridCell>

                <GridCell>
                  <Small textStrong>4.1k</Small>
                </GridCell>
              </Grid>
            </DataPickerMeta>
          </DataPicker>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/DataPicker/DataPicker'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/DataPicker/DataPickerDropdown'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/DataPicker/DataPickerMeta'),
        ] } />
      </DocumentationContent>
    );
  }
}
