import React, { Component } from 'react';
import { LogoPage } from '@brandwatch/axiom-composites';
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
          <LogoPage textCenter theme="day">Lorem ipsum</LogoPage>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-composites/src/LogoPage/LogoPage'),
        ] } />
      </DocumentationContent>
    );
  }
}
