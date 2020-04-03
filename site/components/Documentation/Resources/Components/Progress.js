import React, { Component } from "react";
import {
  Grid,
  GridCell,
  Progress,
  ProgressButton,
  ProgressFinite,
  ProgressInfinite,
} from "@brandwatch/axiom-components";
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from "@brandwatch/axiom-documentation-viewer";

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <DocumentationShowCase centered>
          <Grid responsive={false}>
            <GridCell>
              <Progress />
            </GridCell>
            <GridCell>
              <ProgressFinite />
            </GridCell>
            <GridCell>
              <ProgressInfinite />
            </GridCell>
          </Grid>
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Progress/Progress"),
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Progress/ProgressFinite"),
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Progress/ProgressInfinite"),
          ]}
        />

        <DocumentationShowCase centered>
          <ProgressButton>Set isInProgress</ProgressButton>
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Progress/ProgressButton"),
          ]}
        />
      </DocumentationContent>
    );
  }
}
