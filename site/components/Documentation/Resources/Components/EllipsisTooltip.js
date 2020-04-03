import React, { Component } from "react";
import { Grid, GridCell, EllipsisTooltip } from "@brandwatch/axiom-components";
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from "@brandwatch/axiom-documentation-viewer";

export default class Documentation extends Component {
  render() {
    return (
      <DocumentationContent>
        <Grid>
          <GridCell>
            <DocumentationShowCase centered>
              <div style={{ width: "100px", display: "block" }}>
                <EllipsisTooltip>Text not wrapped</EllipsisTooltip>
              </div>
            </DocumentationShowCase>
          </GridCell>
          <GridCell>
            <DocumentationShowCase centered>
              <div style={{ width: "100px", display: "block" }}>
                <EllipsisTooltip>
                  Text that will be wrappen having a tooltip on hover
                </EllipsisTooltip>
              </div>
            </DocumentationShowCase>
          </GridCell>
        </Grid>

        <DocumentationApi
          components={[
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/EllipsisTooltip/EllipsisTooltip"),
          ]}
        />
      </DocumentationContent>
    );
  }
}
