import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Badge from '../Badge';
import BadgeGroup from '../BadgeGroup';
import Strong from '../../typography/Strong';

class BadgeExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Badge: PropTypes.object.isRequired,
      BadgeGroup: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      Badge: components.Badge,
      BadgeGroup: components.BadgeGroup,
    };

    const initialProps = {
      Badge: {
        color: 'tiny-clanger',
      },
      BadgeGroup: {

      },
    };

    const initialPropOptions = {
      BadgeGroup: {
        children: {
          count: 3,
          max: Infinity,
          min: 1,
        },
      },
    };

    return (
      <ExampleConfig
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <BadgeGroup { ...initialProps.BadgeGroup }>
          <Badge { ...initialProps.Badge }>
            <Strong>100</Strong>%
          </Badge>
        </BadgeGroup>
      </ExampleConfig>
    );
  }
}

export default [ BadgeExample ];
