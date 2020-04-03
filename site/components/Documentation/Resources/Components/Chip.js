import React, { Component } from "react";
import { Chip, ChipList, Grid, GridCell } from "@brandwatch/axiom-components";
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
              <ChipList label={"Topics"}>
                <Chip>Kyrie Irving</Chip>
                <Chip leftIcon={"tick"} metric={"(65%)"}>
                  Aron Baynes
                </Chip>
                <Chip rightIcon={"cross"}>Jaylen Brown</Chip>
                <Chip disabled>Jayson Tatum</Chip>
                <Chip active metric={"(1%)"} rightIcon={"cross"}>
                  Al Horford
                </Chip>
                <Chip>Terry Rozier</Chip>
                <Chip>Marcus Morris</Chip>
                <Chip>Gordon Hayward</Chip>
                <Chip>Marcus Smart</Chip>
              </ChipList>
            </DocumentationShowCase>
          </GridCell>
        </Grid>

        <DocumentationApi
          components={[
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Chip/Chip"),
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Chip/ChipList"),
          ]}
        />
      </DocumentationContent>
    );
  }
}
