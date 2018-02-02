import React, { Component } from 'react';
import { List, ListItem } from '@brandwatch/axiom-components';
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
          <List style="inline">
            <ListItem>List item</ListItem>
            <ListItem>List item</ListItem>
            <ListItem>List item</ListItem>
          </List>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/List/List'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/List/ListItem'),
        ] } />
      </DocumentationContent>
    );
  }
}
