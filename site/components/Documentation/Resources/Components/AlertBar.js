import React, { Component } from 'react';
import { AlertBar } from '@brandwatch/axiom-components';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <DocumentationShowCase>
          <AlertBar space="x1" type="success">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
            amet pulvinar lorem. Aliquam porta eros at dui commodo posuere.
          </AlertBar>
          <AlertBar space="x1" type="error">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
            amet pulvinar lorem. Aliquam porta eros at dui commodo posuere.
          </AlertBar>
          <AlertBar space="x1" type="warning">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
            amet pulvinar lorem. Aliquam porta eros at dui commodo posuere.
          </AlertBar>
          <AlertBar space="x1" type="info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
            amet pulvinar lorem. Aliquam porta eros at dui commodo posuere.
          </AlertBar>
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/AlertBar/AlertBar'),
          ]}
        />
      </DocumentationContent>
    );
  }
}
