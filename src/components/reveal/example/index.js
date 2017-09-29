import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Reveal from '../Reveal';

class RevealExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Reveal: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      Reveal: components.Reveal,
    };

    const initialProps = {
      Reveal: {
        visible: true,
      },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <Reveal { ...initialProps.Reveal }>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla iaculis eleifend turpis, at varius lectus ullamcorper a.
          Sed cursus scelerisque aliquet. Mauris mollis eros ac erat congue
          mattis id at nisl. Sed lacus neque, pulvinar eu neque sed, cursus
          vestibulum nisi.
        </Reveal>
      </ExampleConfig>
    );
  }
}

module.exports = [ RevealExample ];
