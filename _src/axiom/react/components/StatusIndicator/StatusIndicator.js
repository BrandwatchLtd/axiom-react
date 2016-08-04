import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';
import { colorIds } from '../../../sass';

const propTypes = {
  children: { node: true },
  color: { oneOf: [...colorIds], default: 'primary' },
  size: { oneOf: ['sm', 'md', 'lg'], default: 'md' },
};

export class StatusIndicator extends Component {
  static propTypes = propTypes;

  render() {
    const {
      children,
      className,
      color = propTypes.color.default,
      size = propTypes.size.default,
    } = this.props;

    const classes = classnames(className, 'ax-status-indicator', {
      [`ax-status-indicator--${color}`]: color,
      'ax-status-indicator--sm': size === 'sm',
      'ax-status-indicator--md': size === 'md',
      'ax-status-indicator--lg': size === 'lg',
    });

    return (
      <div className={ classes }>
        <span className="ax-status-indicator__dot" />
        { children }
      </div>
    );
  }
}

export default enhance(StatusIndicator)(
  addPropTypes('global'),
  addClassName('global'),
);


