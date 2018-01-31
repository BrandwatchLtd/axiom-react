import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../Base/Base';
import './Table.css';

export default class Table extends Component {
  static propTypes = {
    /** TableHead and/or TableBody */
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base space="x6" { ...rest } Component="table" className="ax-table">
        { children }
      </Base>
    );
  }
}
