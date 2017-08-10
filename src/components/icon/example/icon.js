import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import { Icon } from 'bw-axiom';

export default class IconExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Icon: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      Icon: components.Icon,
    };

    const initialProps = {
      Icon: {
        name: 'annotate',
        size: '4rem',
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <Icon { ...initialProps.Icon } />
      </ExampleConfig>
    );
  }
}
