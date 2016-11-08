import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

if (__INCLUDE_CSS__) {
  require('./ChedioButtox.scss');
}

export class ChedioButtox extends Component {
  static propTypes = {
    children: { node: true },
    inputClassName: { string: true },
    inputType: { string: true, isRequired: true },
    labelClassName: { string: true },
  };

  render() {
    const {
      className,
      children,
      inputClassName,
      inputType,
      labelClassName,
      ...rest
    } = this.props;

    const classes = classnames(className,
      'ax-chedio-buttox__container', {
        ['ax-chedio-buttox__container--space']: !!children,
      }
    );

    return (
      <label className={ classes }>
        <input { ...rest } className={ classnames('ax-chedio-buttox', inputClassName) } type={ inputType } />
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
