import React, { Component, PropTypes } from 'react';
import { Base } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('../image/Image.scss');
}

export default class Image extends Component {
  static propTypes = {
    children: PropTypes.node,
    src: PropTypes.string.isRequired,
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
      <Base
          className="ax-image"
          { ...rest }
          Component="img"
          onError={ children && ::this.showFallback } />
    );
  }
}
