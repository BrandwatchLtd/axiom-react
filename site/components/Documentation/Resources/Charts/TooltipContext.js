import React, { Component } from "react";
import {
  DropdownContext,
  DropdownContent,
  Paragraph,
} from "@brandwatch/axiom-components";

export default class TooltipContextExample extends Component {
  render() {
    return (
      <DropdownContext {...this.props} width="17rem">
        <DropdownContent>
          <Paragraph textColor="subtle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            laoreet gravida mauris vel ultricies.
          </Paragraph>
        </DropdownContent>
      </DropdownContext>
    );
  }
}
