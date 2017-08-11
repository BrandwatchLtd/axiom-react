import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from 'bw-axiom';

export default class TableBody extends Component {
  static propTypes = {
    /** TableRows */
    children: PropTypes.node,
  };

  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <Base { ...rest } Component="tbody" className="ax-table__body">
        { children }
      </Base>
    );
  }
}
