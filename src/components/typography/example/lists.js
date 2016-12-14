import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { List, ListItem, Heading } from 'bw-axiom';

export default class TypeExample extends Component {
  render() {
    return (
      <Example name="Lists">
        <Heading>Ordered</Heading>
        <Snippet>
          <List ordered={ true }>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </List>
        </Snippet>

        <Heading>Unordered</Heading>
        <Snippet>
          <List ordered={ false }>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </List>
        </Snippet>

        <Heading>Inline</Heading>
        <Snippet>
          <List inline={ true }>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </List>
        </Snippet>
      </Example>
    );
  }
}
