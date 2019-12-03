import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../Base/Base';
import './Table.css';

export default class Table extends Component {
  static propTypes = {
    /** TableHead and/or TableBody */
    children: PropTypes.node,
    space: PropTypes.string,
  };

  static defaultProps = {
    space: 'x6',
  }

  render() {
    const { children, space, ...rest } = this.props;

    return (
      <Base space={ space } textColor="subtle" { ...rest } Component="table" className="ax-table">
        { children }
      </Base>
    );
  }
}
