import React, { Component } from 'react';
import Base from '../Base/Base';
import './Text.css';

export default class Text extends Component {
  render() {
    return <Base Component="span" {...this.props} />;
  }
}
