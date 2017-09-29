import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ExampleConfig } from 'style-guide';
import Base from '../Base';

class BaseExample extends Component {
  static propTypes = {
    components: PropTypes.shape({
      Base: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { components } = this.props;
    const propTypes = {
      Base: components.Base,
    };

    const initialProps = {
      Base: { },
    };

    return (
      <ExampleConfig initialProps={ initialProps } propTypes={ propTypes }>
        <Base { ...initialProps.Base }>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla iaculis eleifend turpis, at varius lectus ullamcorper a.
          Sed cursus scelerisque aliquet. Mauris mollis eros ac erat congue
          mattis id at nisl. Sed lacus neque, pulvinar eu neque sed, cursus
          vestibulum nisi.
        </Base>
      </ExampleConfig>
    );
  }
}

module.exports = [ BaseExample ];
