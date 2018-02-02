import React, { Component } from 'react';
import { Toggle } from '@brandwatch/axiom-components';
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
          <Toggle
              onToggle={ (setValue, getValue) =>
                setValue('Toggle', 'toggled', !getValue('Toggle', 'toggled')) }
              toggled>
            Toggle label
          </Toggle>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Toggle/Toggle'),
        ] } />
      </DocumentationContent>
    );
  }
}
