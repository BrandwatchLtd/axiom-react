import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from 'bw-axiom';
import TextGroup from './TextGroup';
import './TextArea.css';

export default class TextArea extends Component {
  static propTypes = {
    height: PropTypes.number,
    label: PropTypes.string,
  };

  static defaultProps = {
    height: 150,
  };

  render() {
    const { height, label, ...rest } = this.props;
    const style = { minHeight: height };

    return (
      <TextGroup label={ label }>
        <Base { ...rest } Component="textarea" className="ax-textarea" style={ style } />
      </TextGroup>
    );
  }
}
