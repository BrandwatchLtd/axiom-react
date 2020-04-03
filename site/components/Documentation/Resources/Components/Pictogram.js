import React, { Component } from "react";
import chunk from "lodash.chunk";
import { Grid, GridCell, Pictogram } from "@brandwatch/axiom-components";
import {
  DocumentationApi,
  DocumentationContent,
  DocumentationShowCase,
} from "@brandwatch/axiom-documentation-viewer";

export default class Documentation extends Component {
  render() {
    const pictogramProps = require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Pictogram/Pictogram");

    return (
      <DocumentationContent>
        {chunk(pictogramProps.props.name.values, 4).map((chunk, index) => (
          <Grid key={index} responsive={false}>
            {chunk.map((name) => (
              <GridCell key={name} width={25}>
                <Grid
                  gutters="tiny"
                  none
                  textCenter
                  textLeft="small"
                  verticalAlign="middle"
                >
                  <GridCell>
                    <Pictogram name={name} />
                  </GridCell>

                  <GridCell>{name}</GridCell>
                </Grid>
              </GridCell>
            ))}
          </Grid>
        ))}

        <DocumentationShowCase centered>
          <Grid gutters="tiny" responsive={false} shrink verticalAlign="middle">
            <GridCell>
              <Pictogram name="featured-content" size="2rem" />
            </GridCell>
            <GridCell>
              <Pictogram name="featured-content" size="3rem" />
            </GridCell>
            <GridCell>
              <Pictogram name="featured-content" size="4rem" />
            </GridCell>
            <GridCell>
              <Pictogram name="featured-content" size="5rem" />
            </GridCell>
          </Grid>
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Pictogram/Pictogram"),
          ]}
        />
      </DocumentationContent>
    );
  }
}
