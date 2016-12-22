import React, { Component, Children, PropTypes } from 'react';
import classnames from 'classnames';
import { findComponent } from '../../utils';
import Base from '../base/Base';
import ButtonIcon from './ButtonIcon';

if (__INCLUDE_CSS__) {
  require('./Button.scss');
}

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    full: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['small', 'medium', 'large']),
    ]),
    size: PropTypes.oneOf(['small', 'large']),
    style: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  };

  static defaultProps ={
    style: 'primary',
    size: 'small',
  };

  render() {
    const {
      className,
      children,
      style,
      size,
      full,
      ...rest
    } = this.props;

    const classes = classnames(className,
      'ax-button', {
        [`ax-button--${size}`]: size,
        [`ax-button--${style}`]: style,
        'ax-button--full': full === true,
        [`ax-button--full--${full}`]: full && full !== true,
      },
    );

    const icon = findComponent(children, ButtonIcon);
    const filteredChildren = Children.toArray(children)
      .filter(({ type }) => type !== ButtonIcon);

    return (
      <Base Component="button" { ...rest } className={ classes }>
        { icon }
        { filteredChildren }
      </Base>
    );
  }
}
