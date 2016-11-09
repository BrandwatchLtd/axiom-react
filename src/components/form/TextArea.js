import React, { Component } from 'react';
import { enhance, addPropTypes } from '../_utils/components';
import TextGroup from './TextGroup';

if (__INCLUDE_CSS__) {
  require('./TextArea.scss');
}

export class TextArea extends Component {
  static propTypes = {
    children: { node: true },
    label: { string: true },
  };

  render() {
    const { className, label, ...rest } = this.props;

    return (
      <TextGroup className={ className } label={ label }>
        <textarea { ...rest } className="ax-textarea" />
      </TextGroup>
    );
  }
}

export default enhance(TextArea)(addPropTypes());
