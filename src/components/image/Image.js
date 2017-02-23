import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('../image/Image.scss');
}

export default class Image extends Component {
  static propTypes = {
    children: PropTypes.node,
    src: PropTypes.string,
    onError: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      fallback: false,
    };
  }

  handleError(...args) {
    const { onError } = this.props;

    this.setState({ fallback: true });

    if (typeof onError === 'function') {
      onError(...args);
    }
  }

  render() {
    const { children, src, ...rest } = this.props;
    const { fallback } = this.state;
    const classes = classnames('ax-image', {});

    if (!src || (fallback && children)) {
      return children;
    }

    return (
      <Base
          { ...rest }
          Component="img"
          className={ classes }
          onError={ ::this.handleError }
          src={ src } />
    );
  }
}
