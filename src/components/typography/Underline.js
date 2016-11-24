import React, { Component, PropTypes } from 'react';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./Underline.scss');
}

export default class Underline extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } Component="u">
        { children }
      </Base>
    );
  }
}
