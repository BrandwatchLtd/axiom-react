import React, { Component, PropTypes } from 'react';

if (__INCLUDE_CSS__) {
  require('./ExampleBox.scss');
}

export default class ExampleBox extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
  };

  render() {
    const { children } = this.props;

    return (
      <div className="dm-example-box">
        { children }
      </div>
    );
  }
}
