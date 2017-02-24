import React, { Component, PropTypes } from 'react';
import { Example, Snippet } from 'style-guide';
import { Card, CardList } from 'bw-axiom';
import CardContent from './CardContent';

export default class CardExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      CardList: PropTypes.shape({
        size: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { CardList: { size } } = components;

    return (
      <Example name="Card Sizes">
        <Snippet>
          { size.values.map((size) =>
            <CardList key={ size } size={ size }>
              <Card>
                <CardContent
                    heading={ `A ${size} card` }
                    size={ size }
                    snippetReplace={ true } />
              </Card>

              <Card snippetSkip={ true }>
                <CardContent
                    heading={ `A ${size} card` }
                    size={ size } />
              </Card>
            </CardList>
          ) }
        </Snippet>
      </Example>
    );
  }
}
