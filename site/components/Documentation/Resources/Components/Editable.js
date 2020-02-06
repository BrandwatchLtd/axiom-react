import React, { Component } from 'react';
import { EditableLine, EditableTitle, Heading } from '@brandwatch/axiom-components';
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
          <EditableTitle>
            <Heading textSize="headline">
              <EditableLine
                  onChange={ (setValue, getValue, value) => setValue('EditableLine', 'value', value) }
                  placeholder="Editable text here"
                  value="" />
            </Heading>
          </EditableTitle>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Editable/EditableLine'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/Editable/EditableTitle'),
        ] } />
      </DocumentationContent>
    );
  }
}
