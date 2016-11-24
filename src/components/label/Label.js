import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./Label.scss');
}

export default class Label extends Component {
  static propTypes = {
    children: PropTypes.node,
    color: PropTypes.oneOf([
      'white', 'grey', 'red', 'pink', 'orange', 'orange-light',
      'yellow', 'green', 'blue', 'blue-light', 'purple',
    ]),
    full: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['small', 'medium', 'large']),
    ]),
    size: PropTypes.oneOf(['small', 'large']),
  };

  static defaultProps = {
    color: 'grey',
    size: 'small',
  };

  render() {
    const {
      className,
      children,
      color,
      size,
      full,
      ...rest
    } = this.props;

    const classes = classnames(className,
      'ax-label', {
        [`ax-label--${size}`]: size,
        [`ax-label--${color}`]: color,
        'ax-label--full': full === true,
        [`ax-label--full--${full}`]: full & full !== true,
      },
    );

    return (
      <Base { ...rest } Component="span" className={ classes }>
        { children }
      </Base>
    );
  }
}
