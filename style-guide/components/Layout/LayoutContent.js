import PropTypes from 'prop-types';
import React, { Component } from 'react';

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
