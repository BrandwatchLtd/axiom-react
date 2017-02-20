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
      <Example name="Compact cards">
        <Snippet>
          <CardList separators={ true } snippetIgnore={ true }>
            { size.values.map((size) =>
              <CardListItem key={ size } snippetIgnore={ true }>
                <Card compact={ true } size={ size }>
                  <CardContent
                      heading={ `A ${size} card` }
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
