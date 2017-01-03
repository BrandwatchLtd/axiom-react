import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Card, CardList, CardListItem } from 'bw-axiom';
import CardContent from './CardContent';

export default class CardExample extends Component {
  render() {
    return (
      <Example name="Basic Card">
        <Snippet>
          <CardList>
            <CardListItem>
              <Card>
                <CardContent snippetSkip={ true }  />
              </Card>
            </CardListItem>

            <CardListItem>
              <Card>
                <CardContent snippetSkip={ true }  />
              </Card>
            </CardListItem>

            <CardListItem>
              <Card>
                <CardContent snippetSkip={ true }  />
              </Card>
            </CardListItem>
          </CardList>
        </Snippet>
      </Example>
    );
  }
}
