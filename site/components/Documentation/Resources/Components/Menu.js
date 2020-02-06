import React, { Component } from 'react';
import { Menu, MenuItem } from '@brandwatch/axiom-components';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <DocumentationShowCase centered>
          <Menu>
            <MenuItem active>Menu item</MenuItem>
            <MenuItem>Menu item</MenuItem>
            <MenuItem>Menu item</MenuItem>
          </Menu>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Menu/Menu'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Menu/MenuItem'),
        ] } />
      </DocumentationContent>
    );
  }
}
