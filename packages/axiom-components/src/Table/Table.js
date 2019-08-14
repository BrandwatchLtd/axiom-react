import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Base from '../Base/Base';
import './Table.css';

export default class Table extends Component {
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    /** TableHead and/or TableBody */
    children: PropTypes.node,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Base space="x6" textColor="subtle" { ...rest } Component="table" className="ax-table">
        { children }
      </Base>
    );
  }
}
