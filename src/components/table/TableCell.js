import React, { Component, PropTypes } from 'react';
import { Base } from 'bw-axiom';

export default class TableCell extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <Base { ...rest } Component="td" className="ax-table__cell">
        { children }
      </Base>
    );
  }
}
