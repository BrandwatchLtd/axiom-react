import React, { Component } from 'react';
import List from '../List';
import ListItem from '../ListItem';
import Heading from '../../typography/Heading';
import Example from 'style-guide/components/Example/Example';
import Snippet from 'style-guide/components/Example/Snippet';

export default class TypeExample extends Component {
  render() {
    return (
      <Example name="Lists">
        <Heading level={ 5 }>Ordered</Heading>
        <Snippet>
          <List ordered={ true }>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </List>
        </Snippet>

        <Heading level={ 5 }>Unordered</Heading>
        <Snippet>
          <List ordered={ false }>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </List>
        </Snippet>

        <Heading level={ 5 }>Inline</Heading>
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
