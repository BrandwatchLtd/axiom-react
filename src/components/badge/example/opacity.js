import React, { Component, PropTypes } from 'react';
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
    const opacities = [0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1];

    return (
      <Example name="Colored Badges">
        <Snippet>
          { opacities.map((opacity) =>
            <BadgeGroup key={ opacity } snippetIgnore={ true }>
              { color.values.map((id, index) =>
                <Badge color={ id } key={ id } opacity={ opacity } snippetIgnore={ !!index }>
                  <Strong snippetReplace={ true }>{ opacity * 10 }0</Strong>%
                </Badge>
              ) }
            </BadgeGroup>
          ) }
        </Snippet>
      </Example>
    );
  }
}
