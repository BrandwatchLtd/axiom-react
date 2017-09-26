import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../base/Base';
import './Stats.css';

export default class Stats extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest }
          Component="ul"
          className="ax-stat-cards__stats">
        { children }
      </Base>
    );
  }
}
