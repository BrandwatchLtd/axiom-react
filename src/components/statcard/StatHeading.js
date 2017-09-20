import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../base/Base';
import './StatHeading.css';

export default class StatHeading extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base { ...rest } className="ax-stat-cards__heading">
        { children }
      </Base>
    );
  }
}
