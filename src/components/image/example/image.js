import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import { IconIndicator, Image } from 'bw-axiom';

export default class ImageExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Image: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      Image: components.Image,
    };

    const initialProps = {
      Image: {
        src: 'assets/axiom-bg.jpg',
        style: { width: '10rem' },
      },
    };

    const initialPropOptions = {
      Image: {
        children: {
          options: [{
            name: 'With fallback',
            children: <IconIndicator color="error" name="warning" />,
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
        <Image { ...initialProps.Image }>
          { initialPropOptions.Image.children.options[0].children }
        </Image>
      </ExampleConfig>
    );
  }
}
