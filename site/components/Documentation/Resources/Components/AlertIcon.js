import React, { Component } from "react";
import { AlertIcon, Grid, GridCell } from "@brandwatch/axiom-components";
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
          <Grid none responsive={false}>
            <GridCell>
              <AlertIcon style="primary" type="success" />
            </GridCell>
            <GridCell>
              <AlertIcon style="primary" type="warning" />
            </GridCell>
            <GridCell>
              <AlertIcon style="primary" type="error" />
            </GridCell>
            <GridCell>
              <AlertIcon style="primary" type="info" />
            </GridCell>
          </Grid>

          <Grid none responsive={false}>
            <GridCell>
              <AlertIcon style="secondary" type="success" />
            </GridCell>
            <GridCell>
              <AlertIcon style="secondary" type="warning" />
            </GridCell>
            <GridCell>
              <AlertIcon style="secondary" type="error" />
            </GridCell>
            <GridCell>
              <AlertIcon style="secondary" type="info" />
            </GridCell>
          </Grid>

          <Grid none responsive={false}>
            <GridCell>
              <AlertIcon style="subtle" type="success" />
            </GridCell>
            <GridCell>
              <AlertIcon style="subtle" type="warning" />
            </GridCell>
            <GridCell>
              <AlertIcon style="subtle" type="error" />
            </GridCell>
            <GridCell>
              <AlertIcon style="subtle" type="info" />
            </GridCell>
          </Grid>
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/AlertIcon/AlertIcon"),
          ]}
        />
      </DocumentationContent>
    );
  }
}
