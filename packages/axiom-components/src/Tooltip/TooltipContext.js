import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Context from '../Context/Context';

export default class TooltipContext extends Component {

  static propTypes = {
    arrowSize: PropTypes.oneOf(['tiny', 'normal']),
    color: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
  }

  static defaultProps = {
    arrowSize: 'normal',
  }

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
