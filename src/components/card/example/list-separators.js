import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Card, CardList, CardListItem } from 'bw-axiom';
import CardContent from './CardContent';

export default class CardExample extends Component {
  render() {
    return (
      <Example name="List of Cards with separators">
        <Snippet>
          <CardList separators={ true }>
            <CardListItem>
              <Card>
                <CardContent snippetReplace={ true }  />
              </Card>
            </CardListItem>

            <CardListItem>
              <Card>
                <CardContent snippetReplace={ true }  />
              </Card>
            </CardListItem>

            <CardListItem>
              <Card>
                <CardContent snippetReplace={ true }  />
              </Card>
            </CardListItem>
          </CardList>
        </Snippet>
      </Example>
    );
  }
}
