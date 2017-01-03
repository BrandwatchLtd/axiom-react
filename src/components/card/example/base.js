import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Card } from 'bw-axiom';
import CardContent from './CardContent';

export default class CardExample extends Component {
  render() {
    return (
      <Example name="Basic Card">
        <Snippet>
          <Card>
            <CardContent snippetSkip={ true }  />
          </Card>
        </Snippet>
      </Example>
    );
  }
}
