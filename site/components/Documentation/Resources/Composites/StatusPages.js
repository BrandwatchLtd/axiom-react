import React, { Component } from 'react';
import { Status404 } from '@brandwatch/axiom-composites';
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
          <Status404
            contactUsLocation="https://brandwatch.com"
            homeLocation="/"
            theme="day"
          />
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require('!!axiom-documentation-loader!@brandwatch/axiom-composites/src/StatusPage/Status404'),
          ]}
        />
      </DocumentationContent>
    );
  }
}
