import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Example, Snippet } from 'style-guide';
import { Badge, BadgeGroup, Strong } from 'bw-axiom';

export default class BadgeExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Badge: PropTypes.shape({
        color: PropTypes.shape({
          values: PropTypes.array.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const { Badge: { color } } = components;

    return (
      <Example name="Colored Badges">
        <Snippet>
          <BadgeGroup snippetIgnore={ true }>
            { color.values.map((id) =>
              <Badge color={ id } key={ id }>
                <Strong snippetReplace={ true }>100</Strong>%
              </Badge>
            ) }
          </BadgeGroup>
        </Snippet>
      </Example>
    );
  }
}
