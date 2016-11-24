import React, { Component, PropTypes } from 'react';
import TextGroup from './TextGroup';

if (__INCLUDE_CSS__) {
  require('./TextArea.scss');
}

export default class TextArea extends Component {
  static propTypes = {
    label: PropTypes.string,
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
