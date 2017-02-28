import React, { Component, PropTypes } from 'react';
import { Example, Snippet } from 'style-guide';
import { BadgeGroup, Badge, Strong } from 'bw-axiom';

export default class BadgeExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Badge: PropTypes.shape({
        full: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { Badge: { full } } = components;

    return (
      <Example name="Full width Badges">
        <Snippet>
          <BadgeGroup snippetIgnore={ true }>
            <Badge color="highlight" full={ true }>
              <Strong snippetReplace={ true }>+1</Strong>%
            </Badge>

            { full.values.map((at) =>
              <Badge color="highlight" full={ at } key={ at }>
                <Strong snippetReplace={ true }>+1</Strong>%
              </Badge>
            ) }
          </BadgeGroup>
        </Snippet>
      </Example>
    );
  }
}
