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
      <Example name="Interactable and active list of Cards">
        <Snippet>
          <CardList separators={ true } snippetIgnore={ true }>
            <CardListItem snippetIgnore={ true }>
              <Card
                  active={ active === 0 }
                  onClick={ () => this.setState({ active: 0 }) }>
                <CardContent snippetReplace={ true }  />
              </Card>
            </CardListItem>

            <CardListItem snippetSkip={ true }>
              <Card
                  active={ active === 1 }
                  onClick={ () => this.setState({ active: 1 }) }>
                <CardContent snippetReplace={ true }  />
              </Card>
            </CardListItem>

            <CardListItem snippetSkip={ true }>
              <Card
                  active={ active === 2 }
                  onClick={ () => this.setState({ active: 2 }) }>
                <CardContent snippetReplace={ true }  />
              </Card>
            </CardListItem>
          </CardList>
        </Snippet>
      </Example>
    );
  }
}
