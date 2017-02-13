import React, { Component, PropTypes } from 'react';
import { Base } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('../image/Image.scss');
}

export default class Image extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);

    this.state = {
      fallback: false,
    };
  }

  showFallback() {
    this.setState({ fallback: true });
  }

  render() {
    const { children, ...rest } = this.props;
    const { fallback } = this.state;

    if (fallback) {
      return children;
    }

    return (
      <Base Component="img" { ...rest } onError={ children && ::this.showFallback } />
    );
  }
}
