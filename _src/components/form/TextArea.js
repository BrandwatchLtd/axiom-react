import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';

if (__INCLUDE_CSS__) {
  require('./TextInput.scss');
  require('./TextArea.scss');
}

export class TextArea extends Component {
  static propTypes = {
    invalid: { bool: true },
    valid: { bool: true },
  };

  render() {
    const { className, valid, invalid, ...rest } = this.props;
    const classes = classnames(className,
      'ax-input__group', {
        'ax-input__group--valid': valid === true,
        'ax-input__group--invalid': invalid === true,
      }
    );

    return (
      <label className={ classes }>
        <textarea className="ax-input ax-textarea" { ...rest } />
      </label>
    );
  }
}

export default enhance(TextArea)(
  addPropTypes('global'),
  addClassName('global'),
);
