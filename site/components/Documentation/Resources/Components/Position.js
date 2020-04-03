import React, { Component } from "react";
import { DataPoints, DataPoint } from "@brandwatch/axiom-charts";
import {
  DropdownContext,
  DropdownContent,
  Heading,
  Position,
  PositionSource,
  PositionTarget,
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
          <Position isVisible position="bottom" showArrow>
            <PositionTarget>
              <DataPoints size="2rem">
                <DataPoint color="giant-leap" />
                <DataPoint color="critical-mass" />
                <DataPoint color="new-horizon" />
              </DataPoints>
            </PositionTarget>

            <PositionSource>
              <DropdownContext>
                <DropdownContent>
                  <Heading textCenter textStrong>
                    Positioned content
                  </Heading>
                </DropdownContent>
              </DropdownContext>
            </PositionSource>
          </Position>
        </DocumentationShowCase>

        <DocumentationApi
          components={[
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Position/Position"),
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Position/PositionSource"),
            require("!!axiom-documentation-loader!@brandwatch/axiom-components/src/Position/PositionTarget"),
          ]}
        />
      </DocumentationContent>
    );
  }
}
