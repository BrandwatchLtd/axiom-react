import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Card, CardList, CardListItem } from 'bw-axiom';
import CardContent from './CardContent';

export default class CardExample extends Component {
  componentWillMount() {
    this.setState({ active: undefined });
  }

  render() {
    const { active } = this.state;

    return (
      <Example name="Basic Card">
        <Snippet>
          <CardList>
            <CardListItem
                active={ active === 0 }
                onClick={ () => this.setState({ active: 0 }) }>
              <Card>
                <CardContent snippetSkip={ true }  />
              </Card>
            </CardListItem>

            <CardListItem
                active={ active === 1 }
                onClick={ () => this.setState({ active: 1 }) }>
              <Card>
                <CardContent snippetSkip={ true }  />
              </Card>
            </CardListItem>

            <CardListItem
                active={ active === 2 }
                onClick={ () => this.setState({ active: 2 }) }>
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
