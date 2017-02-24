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
      <Example name="Compact cards">
        <Snippet>
          { size.values.map((size) =>
            <CardList compact={ true } key={ size } size={ size }>
              <Card>
                <CardContent
                    heading={ `A ${size} card` }
                    size={ size }
                    snippetReplace={ true } />
              </Card>

              <Card>
                <CardContent
                    heading={ `A ${size} card` }
                    size={ size }
                    snippetReplace={ true } />
              </Card>
            </CardList>
          ) }
        </Snippet>
      </Example>
    );
  }
}
