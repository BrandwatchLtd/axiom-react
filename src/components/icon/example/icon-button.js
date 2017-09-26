import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import IconButton from '../IconButton';

export default class IconExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      IconButton: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      IconButton: components.IconButton,
    };

    const initialProps = {
      IconButton: {
        name: 'annotate',
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <IconButton { ...initialProps.IconButton } />
      </ExampleConfig>
    );
  }
}
