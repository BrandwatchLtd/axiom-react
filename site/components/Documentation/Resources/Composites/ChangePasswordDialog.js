import React, { Component } from 'react';
import { ChangePasswordDialog } from '@brandwatch/axiom-composites';
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from '@brandwatch/axiom-documentation-viewer';

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <DocumentationShowCase hidePreview>
          <ChangePasswordDialog
            isOpen
            onRequestClose={setValue =>
              setValue('ChangePasswordDialog', 'isOpen', false)
            }
            onSubmit={() => {}}
          />
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require('!!axiom-documentation-loader!@brandwatch/axiom-composites/src/ChangePasswordDialog/ChangePasswordDialog'),
          ]}
        />
      </DocumentationContent>
    );
  }
}
