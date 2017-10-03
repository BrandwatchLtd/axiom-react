import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Pictogram from '../Pictogram';

class PictogramExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Pictogram: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      Pictogram: components.Pictogram,
    };

    const initialProps = {
      Pictogram: {
        name: 'female',
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <Pictogram { ...initialProps.Pictogram } />
      </ExampleConfig>
    );
  }
}

export default [ PictogramExample ];
