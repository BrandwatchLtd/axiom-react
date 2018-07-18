import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ContextContent from '../Context/ContextContent';

export default class TooltipContent extends Component {

  static propTypes = {
    padding: PropTypes.oneOf(['tiny', 'small', 'large']),
  }

  static defaultProps = {
    padding: 'small',
  }

  render() {

    const {
      padding,
      ...rest
    } = this.props;

    return (
      <ContextContent { ...rest } padding={ padding } />
    );
  }
}
