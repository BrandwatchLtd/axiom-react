import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./Icon.scss');
}

const sizeToFaMap = {
  'small': undefined,
  'medium': 'lg',
  'large': '2x',
  'xlarge': '3x',
  'xxlarge': '4x',
  'xxxlarge': '5x',
};

export default class Icon extends Component {
  static propTypes = {
    fixedWidth: PropTypes.bool,
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'xxlarge', 'xxxlarge']),
  };

  static defaultProps = {
    size: 'small',
  };

  render() {
    const {
      className,
      name,
      size,
      fixedWidth,
      ...rest
    } = this.props;

    const classes = classnames(className,
      'ax-icon',
      `ax-icon-${name}`, {
        [`ax-icon-${sizeToFaMap[size]}`]: sizeToFaMap[size],
        'ax-icon-fw': fixedWidth === true,
      }
    );

    return (
      <Base { ...rest } Component="i" className={ classes } />
    );
  }
}
