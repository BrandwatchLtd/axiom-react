import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ContextContent from '../Context/ContextContent';

export default class TooltipContent extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    size: PropTypes.oneOf(['tiny', 'small']),
  }

  static defaultProps = {
    size: 'small',
  }

  render() {
    const { size, ...rest } = this.props;

    return (
      <ContextContent textSize={ size === 'tiny' ? 'small' : 'body' } { ...rest } padding={ size } />
    );
  }
}
