import React, { Component } from 'react';
import { Base, Separator } from '@brandwatch/axiom-components';
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
          <Base style={ { height: '12rem' } }>
            <Separator />
          </Base>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Separator/Separator'),
        ] } />
      </DocumentationContent>
    );
  }
}
