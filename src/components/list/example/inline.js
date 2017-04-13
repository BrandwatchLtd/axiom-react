import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Heading, List, ListItem, Paragraph, Strong } from 'bw-axiom';

export default class TypeExample extends Component {
  render() {
    return (
      <Example name="Inline">
        <Snippet>
          <List inline={ true }>
            <ListItem>
              <Heading>Lorem ipsum dolor sit amet</Heading>
            </ListItem>
            <ListItem>
              Lorem: <Strong>Ipsum</Strong>
            </ListItem>
            <ListItem>
              <Paragraph>Integer molestie lorem at massa</Paragraph>
            </ListItem>
          </List>
        </Snippet>
      </Example>
    );
  }
}
