import React, { Component } from 'react';
import { DocumentationViewer } from '@brandwatch/axiom-documentation-viewer';
import ChangePasswordDialog from './Composites/ChangePasswordDialog';
import FormInputs from './Composites/FormInputs';
import LogoPage from './Composites/LogoPage';
import StatusPages from './Composites/StatusPages';
import UserMenu from './Composites/UserMenu';

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationViewer
        config={[
          {
            id: 'change-password-dialog',
            name: 'Change Password Dialog',
            Component: ChangePasswordDialog,
          },
          {
            id: 'form-inputs',
            name: 'Form Inputs',
            Component: FormInputs,
          },
          {
            id: 'logo-page',
            name: 'Logo Page',
            Component: LogoPage,
          },
          {
            id: 'status-page',
            name: 'Status Page',
            Component: StatusPages,
          },
          {
            id: 'user-menu',
            name: 'User Menu',
            Component: UserMenu,
          },
        ]}
        path="/docs/packages/axiom-composites"
      />
    );
  }
}
