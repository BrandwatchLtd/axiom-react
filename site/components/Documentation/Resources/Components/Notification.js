import React, { Component } from "react";
import { Notifications, Notification } from "@brandwatch/axiom-components";
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from "@brandwatch/axiom-documentation-viewer";

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <DocumentationShowCase hidePreview>
          <Notifications>
            <Notification type="success">Success notification</Notification>
            <Notification type="error">Error notification</Notification>
            <Notification type="warning">Warning notification</Notification>
            <Notification type="info">Info notification</Notification>
          </Notifications>
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Notification/Notification"),
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Notification/Notifications"),
          ]}
        />
      </DocumentationContent>
    );
  }
}
