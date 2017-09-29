import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Avatar from '../Avatar';
import Candytar from '../../candytar/Candytar';

class AvatarExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Avatar: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;

    const propTypes = {
      Avatar: components.Avatar,
    };

    const initialProps = {
      Avatar: {
        border: 'large',
        size: '3rem',
        src: 'assets/avatar.png',
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <Avatar { ...initialProps.Avatar }>
          <Candytar size="2rem" />
        </Avatar>
      </ExampleConfig>
    );
  }
}

module.exports = [ AvatarExample ];
