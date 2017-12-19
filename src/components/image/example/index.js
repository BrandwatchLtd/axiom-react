import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import AlertIcon from '../../alert-icon/AlertIcon';
import Image from '../Image';

class ImageExample extends Component {
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
        width: '10rem',
      },
    };

    const initialPropOptions = {
      Image: {
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
        <Image { ...initialProps.Image }>
          { initialPropOptions.Image.children.options[0].children }
        </Image>
      </ExampleConfig>
    );
  }
}

export default [ ImageExample ];
