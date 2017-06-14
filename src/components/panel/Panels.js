import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Panels.css';

export default class Panels extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <div { ...rest } className="ax-panels">
        { children }
      </div>
    );
  }
}
