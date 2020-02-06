import React, { Component } from 'react';
import { Tool, Toolbar } from '@brandwatch/axiom-components';
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
          <Toolbar>
            <Tool>Lorem ipsum</Tool>
            <Tool>Lorem ipsum</Tool>
            <Tool>Lorem ipsum</Tool>
            <Tool>Lorem ipsum</Tool>
          </Toolbar>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Toolbar/Tool'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Toolbar/Toolbar'),
        ] } />
      </DocumentationContent>
    );
  }
}
