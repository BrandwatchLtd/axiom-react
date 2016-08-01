import React, { Component, PropTypes } from 'react';

export class LayoutMain extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;

    return (
      <div>
        { children }
      </div>
    );
  }
}

export default LayoutMain;
