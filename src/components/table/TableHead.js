import React, { Component, PropTypes } from 'react';
import { Base } from 'bw-axiom';

export default class TableHead extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const {
      children,
      ...rest
    } = this.props;

    return (
      <Base { ...rest } Component="thead" className="ax-table__head">
        { children }
      </Base>
    );
  }
}
