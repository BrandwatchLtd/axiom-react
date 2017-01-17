import React, { Component, Children, PropTypes, cloneElement } from 'react';
import classnames from 'classnames';
import { Base, ButtonIcon } from 'bw-axiom';

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
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    style: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  };

  static defaultProps = {
    style: 'primary',
    size: 'medium',
  };

  render() {
    const {
      children,
      style,
      size,
      full,
      ...rest
    } = this.props;

    const classes = classnames('ax-button', {
      [`ax-button--${size}`]: size,
      [`ax-button--${style}`]: style,
      'ax-button--full': full === true,
      [`ax-button--full--${full}`]: full && full !== true,
    });

    const mappedChildren = Children.toArray(children).map((child, index, array) =>
      child.type !== ButtonIcon ? child : cloneElement(child, {
        isEnd: index === array.length - 1,
        isStart: index === 0,
        size,
      })
    );

    return (
      <Base Component="button" { ...rest } className={ classes }>
        { mappedChildren }
      </Base>
    );
  }
}
