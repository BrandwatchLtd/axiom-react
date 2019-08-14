import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context/Context';

export const TooltipContextRef = 'TooltipContext';

export default class TooltipContext extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    color: PropTypes.oneOf(['success', 'warning', 'error', 'info', 'carbon', 'white']),
  }

  static typeRef = TooltipContextRef;

  render() {

    const {
      color,
      ...rest
    } = this.props;

    return (
      <Context color={ color } { ...rest } />
    );
  }
}
