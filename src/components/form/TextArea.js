import React, { Component, PropTypes } from 'react';
import TextGroup from './TextGroup';

if (__INCLUDE_CSS__) {
  require('./TextArea.scss');
}

export default class TextArea extends Component {
  static propTypes = {
    height: PropTypes.number,
    label: PropTypes.string,
  };

  static defaultProps = {
    height: 150,
  };

  render() {
    const { className, height, label, ...rest } = this.props;
    const style = { minHeight: height };

    return (
      <TextGroup className={ className } label={ label }>
        <textarea { ...rest } className="ax-textarea" style={ style } />
      </TextGroup>
    );
  }
}
