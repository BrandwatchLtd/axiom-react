import React, { Component } from "react";
import {
  Grid,
  GridCell,
  LogoBox,
  LogoTab,
  LogoHorizontal,
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
          <Grid none verticalAlign="end">
            <GridCell>
              <LogoBox color="grey" width="6rem" />
            </GridCell>

            <GridCell>
              <LogoTab color="grey" width="6rem" />
            </GridCell>
          </Grid>

          <LogoHorizontal width="12rem" />
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Logo/LogoBox"),
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Logo/LogoHorizontal"),
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Logo/LogoTab"),
          ]}
        />
      </DocumentationContent>
    );
  }
}
