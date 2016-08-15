import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

if (__INCLUDE_CSS__) {
  require('./ChedioButtox.scss');
}

export class ChedioButtox extends Component {
  static propTypes = {
    children: { node: true },
    inline: { bool: true },
    inputClassName: { string: true },
    inputType: { string: true, isRequired: true },
    labelClassName: { string: true },
  };

  render() {
    const {
      className,
      children,
      inline,
      inputClassName,
      inputType,
      labelClassName,
      ...rest,
    } = this.props;

    const classes = classnames(className,
      `ax-chedio-buttox__group`, {
        [`ax-chedio-buttox__group--inline`]: inline === true,
        [`ax-chedio-buttox__group--space`]: !!children,
      }
    );

    return (
      <label className={ classes }>
        <input className={ classnames('ax-chedio-buttox', inputClassName) } type={ inputType } { ...rest } />
        <span className={ classnames('ax-chedio-buttox__label', labelClassName) }>
          { children }
        </span>
      </label>
    );
  }
}

export default enhance(ChedioButtox)(
  addPropTypes('global'),
  addClassName('global'),
);
