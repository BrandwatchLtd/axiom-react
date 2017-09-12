import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import { AlertIcon, ImageCircle } from 'bw-axiom';

export default class ImageCircleExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      ImageCircle: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      ImageCircle: components.ImageCircle,
    };

    const initialProps = {
      ImageCircle: {
        border: 'large',
        src: 'assets/avatar.png',
        size: '7rem',
      },
    };

    const initialPropOptions = {
      ImageCircle: {
        children: {
          options: [{
            name: 'With fallback',
            children: <AlertIcon type="error" />,
          }, {
            name: 'Without fallback',
            children: undefined,
          }],
        },
      },
    };

    return (
      <ExampleConfig
          initialPropOptions={ initialPropOptions }
          initialProps={ initialProps }
          propTypes={ propTypes }>
        <ImageCircle { ...initialProps.ImageCircle }>
          { initialPropOptions.ImageCircle.children.options[0].children }
        </ImageCircle>
      </ExampleConfig>
    );
  }
}
