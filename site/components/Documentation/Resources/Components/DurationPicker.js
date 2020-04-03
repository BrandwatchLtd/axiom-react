import React, { Component } from "react";
import { DurationPicker, Grid, GridCell } from "@brandwatch/axiom-components";
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
              <DurationPicker
                onChange={(setValue, getValue, value) =>
                  setValue("DurationPicker", "value", value)
                }
              />
            </GridCell>
          </Grid>
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/DurationPicker/DurationPicker"),
          ]}
        />
      </DocumentationContent>
    );
  }
}
