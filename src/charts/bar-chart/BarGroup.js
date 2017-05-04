import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BarGroup.css';

export default class BarGroup extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <div { ...rest } className="ax-bar-chart__group">
        <div className="ax-bar-chart__group-bars">
          { children }
        </div>
      </div>
    );
  }
}
