import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../base/Base';
import GridCell from '../grid/GridCell';
import './StatCard.css';

export default class StatCard extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <GridCell>
        <Base { ...rest } className="ax-stat-cards__card">
          { children }
        </Base>
      </GridCell>
    );
  }
}
