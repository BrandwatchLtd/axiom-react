import React, { Component } from 'react';
import {
  AlertDropdown,
  AlertDropdownBody,
  AlertDropdownHeader,
  AlertDropdownContext,
  AlertDropdownSource,
  AlertDropdownTarget,
  TextInput,
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
        <DocumentationShowCase centered>
          <AlertDropdown>
            <AlertDropdownTarget>
              <TextInput
                  onChange={ () => {} }
                  placeholder="Write in me"
                  readOnly />
            </AlertDropdownTarget>

            <AlertDropdownSource>
              <AlertDropdownContext width="30rem">
                <AlertDropdownHeader>
                  Lorem ipsum dolor sit amet
                </AlertDropdownHeader>
                <AlertDropdownBody>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim sollicitudin quam at lacinia. Quisque a dignissim ipsum. Nunc congue, nisi quis venenatis dignissim, nisl quam aliquet sem, vel consectetur purus sapien nec libero. Donec ullamcorper dictum tellus in mattis. Nunc vel est et felis ornare accumsan.
                </AlertDropdownBody>
              </AlertDropdownContext>
            </AlertDropdownSource>
          </AlertDropdown>
        </DocumentationShowCase>

        <DocumentationApi components={ [
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/AlertDropdown/AlertDropdown'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/AlertDropdown/AlertDropdownHeader'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/AlertDropdown/AlertDropdownBody'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/AlertDropdown/AlertDropdownSource'),
          require('!!axiom-documentation-loader!@brandwatch/axiom-components/src/AlertDropdown/AlertDropdownTarget'),
        ] } />
      </DocumentationContent>
    );
  }
}
