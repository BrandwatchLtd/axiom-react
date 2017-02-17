import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Heading, List, ListItem, Paragraph } from 'bw-axiom';

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
              <Paragraph>Consectetur adipiscing elit</Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>Integer molestie lorem at massa</Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>Facilisis in pretium nisl aliquet</Paragraph>
            </ListItem>
          </List>
        </Snippet>
      </Example>
    );
  }
}
