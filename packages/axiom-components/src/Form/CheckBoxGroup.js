import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ChedioButtoxGroup from './ChedioButtoxGroup';

export default class CheckBoxGroup extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    children: PropTypes.node.isRequired,
  };
  render() {
    const { children, ...rest } = this.props;

    return (
      <ChedioButtoxGroup { ...rest }>
        { children }
      </ChedioButtoxGroup>
    );
  }
}
