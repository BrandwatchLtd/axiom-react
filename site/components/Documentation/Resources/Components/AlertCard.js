import React, { Component } from 'react';
import { AlertCard } from '@brandwatch/axiom-components';
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
          <AlertCard
              onRemoveClick={ () => {} }
              shade="shade-2"
              space="x2"
              type="success">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            sit amet pulvinar lorem. Aliquam porta eros at dui commodo posuere.
          </AlertCard>
          <AlertCard
              onRemoveClick={ () => {} }
              shade="shade-2"
              space="x2"
              type="error">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            sit amet pulvinar lorem. Aliquam porta eros at dui commodo posuere.
          </AlertCard>
          <AlertCard
              onRemoveClick={ () => {} }
              shade="shade-2"
              space="x2"
              type="warning">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            sit amet pulvinar lorem. Aliquam porta eros at dui commodo posuere.
          </AlertCard>
          <AlertCard
              onRemoveClick={ () => {} }
              shade="shade-2"
              space="x2"
              type="info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            sit amet pulvinar lorem. Aliquam porta eros at dui commodo posuere.
          </AlertCard>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/AlertCard/AlertCard'),
        ] } />
      </DocumentationContent>
    );
  }
}
