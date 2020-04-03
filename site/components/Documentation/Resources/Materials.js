import React, { Component } from "react";
import { DocumentationViewer } from "@brandwatch/axiom-documentation-viewer";
import Colors from "./Materials/Colors";
import Themes from "./Materials/Themes";

export default class Guidelines extends Component {
  render() {
    return (
      <DocumentationViewer
        config={[
          {
            id: "colours",
            name: "Colours",
            Component: Colors,
          },
          {
            id: "themes",
            name: "Themes",
            Component: Themes,
          },
        ]}
        path="/docs/packages/axiom-materials"
      />
    );
  }
}
