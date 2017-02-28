import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Badge, BadgeGroup, Paragraph } from 'bw-axiom';

export default class BadgeExample extends Component {
  render() {
    return (
      <Example name="Badge group">
        <Paragraph>
          BadgeGroups keep a consistent flow of spacing between Badges and
          sibling elements, so liek other inline elements they should always be
          used, even when there is only one Badge.
        </Paragraph>

        <Snippet>
          <BadgeGroup>
            <Badge>A Badge</Badge>
            <Badge color="highlight">A Badge</Badge>
            <Badge color="success">A Badge</Badge>
            <Badge color="error">A Badge</Badge>
            <Badge>A Badge</Badge>
            <Badge color="highlight">A Badge</Badge>
            <Badge color="success">A Badge</Badge>
            <Badge color="error">A Badge</Badge>
            <Badge>A Badge</Badge>
            <Badge color="highlight">A Badge</Badge>
            <Badge color="success">A Badge</Badge>
            <Badge color="error">A Badge</Badge>
            <Badge>A Badge</Badge>
            <Badge color="highlight">A Badge</Badge>
            <Badge color="success">A Badge</Badge>
            <Badge color="error">A Badge</Badge>
            <Badge>A Badge</Badge>
            <Badge color="highlight">A Badge</Badge>
            <Badge color="success">A Badge</Badge>
            <Badge color="error">A Badge</Badge>
            <Badge>A Badge</Badge>
            <Badge color="highlight">A Badge</Badge>
            <Badge color="success">A Badge</Badge>
            <Badge color="error">A Badge</Badge>
          </BadgeGroup>
        </Snippet>
      </Example>
    );
  }
}
