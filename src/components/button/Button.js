import React, { Component, Children, PropTypes, cloneElement } from 'react';
import classnames from 'classnames';
import { findComponent } from '../_utils/components';
import Base from '../base/Base';
import Icon from '../icon/Icon';

if (__INCLUDE_CSS__) {
  require('./Button.scss');
}

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    /** Converts the button a perfect circle, purposely for smaller isometric (like icons) content.  */
    circular: PropTypes.bool,
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
      circular,
      children,
      style,
      size,
      full,
      ...rest
    } = this.props;

    const icon = findComponent(children, Icon);
    const filteredChildren = Children.toArray(children).filter((component) => component.type !== Icon);
    const classes = classnames(className,
      'ax-button', {
        [`ax-button--${size}`]: size,
        [`ax-button--${style}`]: style,
        'ax-button--circular': circular,
        'ax-button--full': full === true,
        [`ax-button--full--${full}`]: full && full !== true,
      },
    );

    return (
      <Base Component="button" { ...rest } className={ classes }>
        { do { if (icon) {
          cloneElement(icon, {
            className: classnames({
              'ax-button__icon': filteredChildren.length,
            }),
            size,
          });
        } } }

        { filteredChildren }
      </Base>
    );
  }
}
