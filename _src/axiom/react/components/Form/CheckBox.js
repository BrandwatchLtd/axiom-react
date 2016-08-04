import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';
import { blacklist } from '../../utils/props';

export class CheckBox extends Component {
  static propTypes = {
    children: { node: true },
    inline: { bool: true },
  };

  render() {
    const { className, children, inline } = this.props;
    const classes = classnames(className,
      'ax-checkbox__group', {
        'ax-checkbox__group--inline': inline === true,
        'ax-checkbox__group--space': !!children,
      }
    );

    return (
      <label className={ classes }>
        <input className="ax-checkbox"
            type="checkbox"
            { ...blacklist(this.props, ['children', 'className']) } />
        <span className="ax-checkbox__label">{ children }</span>
      </label>
    );
  }
}

export default enhance(CheckBox)(
  addPropTypes('global'),
  addClassName('global'),
);
