import React, { Component, PropTypes } from 'react';
import { Base } from 'bw-axiom';

export default class WordCloud extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  };

  render() {
    const {
      children,
      height,
      width,
      ...rest
    } = this.props;

    return (
      <Base { ...rest }
          Component="svg"
          className="ax-word-cloud"
          height="100%"
          version="1.1"
          viewBox={ `0 0 ${width} ${height}` }
          width="100%">
        { children }
      </Base>
    );
  }
}
