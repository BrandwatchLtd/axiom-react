import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context/Context';

export const TooltipContextRef = 'TooltipContext';

export default class TooltipContext extends Component {
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
