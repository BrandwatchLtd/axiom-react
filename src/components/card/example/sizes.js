import React, { Component, PropTypes } from 'react';
import { Example, Snippet } from 'style-guide';
import { Card, CardListItem, CardList } from 'bw-axiom';
import CardContent from './CardContent';

export default class CardExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Card: PropTypes.shape({
        size: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { Card: { size } } = components;

    return (
      <Example name="Card Sizes">
        <Snippet>
          <CardList separators={ true } snippetIgnore={ true }>
            { size.values.map((size) =>
              <CardListItem key={ size } snippetIgnore={ true }>
                <Card size={ size }>
                  <CardContent
                      heading={ `A ${size} card` }
                      size={ size }
                      snippetReplace={ true } />
                </Card>
              </CardListItem>
            ) }
          </CardList>
        </Snippet>
      </Example>
    );
  }
}
