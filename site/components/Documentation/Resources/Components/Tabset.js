import React, { Component } from "react";
import { Tabset, Tab } from "@brandwatch/axiom-components";
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from "@brandwatch/axiom-documentation-viewer";

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <DocumentationShowCase>
          <Tabset>
            <Tab title="Tab 1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              mauris libero, suscipit eu dignissim eu, consectetur in mauris.
              Donec semper tristique ipsum non vehicula. In eget libero
              lobortis, sollicitudin velit nec, accumsan dolor. Morbi in finibus
              mauris, id pretium ipsum. Sed quis massa tempus nunc molestie
              ultrices sit amet vel urna.
            </Tab>

            <Tab title="Tab 2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              mauris libero, suscipit eu dignissim eu, consectetur in mauris.
              Donec semper tristique ipsum non vehicula. In eget libero
              lobortis, sollicitudin velit nec, accumsan dolor. Morbi in finibus
              mauris, id pretium ipsum. Sed quis massa tempus nunc molestie
              ultrices sit amet vel urna.
            </Tab>

            <Tab title="Tab 3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              mauris libero, suscipit eu dignissim eu, consectetur in mauris.
              Donec semper tristique ipsum non vehicula. In eget libero
              lobortis, sollicitudin velit nec, accumsan dolor. Morbi in finibus
              mauris, id pretium ipsum. Sed quis massa tempus nunc molestie
              ultrices sit amet vel urna.
            </Tab>
          </Tabset>
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Tabset/Tabset"),
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Tabset/Tab"),
          ]}
        />
      </DocumentationContent>
    );
  }
}
