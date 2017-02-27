import React, { Component, PropTypes } from 'react';
import { Heading } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./ExampleBox.scss');
}

export default class ExampleBox extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    name: PropTypes.string,
  };

  render() {
    const { children, name } = this.props;

    return (
      <div className="dm-example-box">
        <Heading space="medium" style="title">{ name }</Heading>

        { children }
      </div>
    );
  }
}
