import React, { Component, PropTypes } from 'react';
import Base from '../base/Base';

if (__INCLUDE_CSS__) {
  require('./Italic.scss');
}

export default class Italic extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base Component="em" { ...rest }>
        { children }
      </Base>
    );
  }
}
