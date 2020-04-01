import React, { Component } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogHeader,
} from '@brandwatch/axiom-components';
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
          <AlertDialog
            isOpen={false}
            onRequestClose={setValue =>
              setValue('AlertDialog', 'isOpen', false)
            }
            type="info"
          >
            <AlertDialogHeader>Lorem ipsum dolor sit amet</AlertDialogHeader>

            <AlertDialogBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              dignissim sollicitudin quam at lacinia. Quisque a dignissim ipsum.
              Nunc congue, nisi quis venenatis dignissim, nisl quam aliquet sem,
              vel consectetur purus sapien nec libero. Donec ullamcorper dictum
              tellus in mattis. Nunc vel est et felis ornare accumsan.
            </AlertDialogBody>
          </AlertDialog>
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/AlertDialog/AlertDialog'),
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/AlertDialog/AlertDialogBody'),
            require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/AlertDialog/AlertDialogHeader'),
          ]}
        />
      </DocumentationContent>
    );
  }
}
