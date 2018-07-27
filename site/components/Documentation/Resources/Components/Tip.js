import React, { Component } from 'react';
import { AlertCard, Base, Tip } from '@brandwatch/axiom-components';
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
          <Base container>
            <Tip color="shade-2" shadow={ false }>
              <AlertCard
                  onRemoveClick={ () => {} }
                  shade="shade-2"
                  space="x2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sit amet pulvinar lorem. Aliquam porta eros at dui commodo posuere.
              </AlertCard>
            </Tip>
          </Base>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Tip/Tip'),
        ] } />
      </DocumentationContent>
    );
  }
}
