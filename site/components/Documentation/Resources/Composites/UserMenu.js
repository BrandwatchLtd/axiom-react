import React, { Component } from 'react';
import { UserMenu } from '@brandwatch/axiom-composites';
import { DropdownMenu, DropdownMenuItem } from '@brandwatch/axiom-components';
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
          <UserMenu
            email="lorem@brandwatch.com"
            firstName="Lorem"
            lastName="Ipsum"
            onLogout={() => {}}
          >
            <DropdownMenu>
              <DropdownMenuItem>Settings</DropdownMenuItem>

              <DropdownMenuItem>Help!</DropdownMenuItem>
            </DropdownMenu>
          </UserMenu>
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require('!!axiom-documentation-loader!@brandwatch/axiom-composites/src/UserMenu/UserMenu'),
          ]}
        />
      </DocumentationContent>
    );
  }
}
