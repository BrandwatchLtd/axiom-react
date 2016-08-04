import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../../utils/components';
import { blacklist } from '../../utils/props';

export class TextArea extends Component {
  static propTypes = {};

  render() {
    const { className } = this.props;
    const classes = classnames(className, 'ax-input__group');

    return (
      <label className={ classes }>
        <textarea
            className="ax-textarea"
            { ...blacklist(this.props, 'className') } />
      </label>
    );
  }
}

export default enhance(TextArea)(
  addPropTypes('global'),
  addClassName('global'),
);
