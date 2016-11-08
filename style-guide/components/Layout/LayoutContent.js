import React, { Component, PropTypes } from 'react';

if (__INCLUDE_CSS__) {
  require('./LayoutContent.scss');
}

export default class LayoutContent extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;

    return (
      <div className="dm-layout__content">
        { children }
      </div>
    );
  }
}
