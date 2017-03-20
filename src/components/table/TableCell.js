import React, { Component, PropTypes } from 'react';
import { Base } from 'bw-axiom';
import classnames from 'classnames';

export default class TableCell extends Component {
  static propTypes = {
    children: PropTypes.node,
    grow: PropTypes.bool,
  };

  static defaultProps = {
    grow: false,
  };

  render() {
    const {
      children,
      grow,
      ...rest
    } = this.props;

    const classes = classnames('ax-table__cell', {
      'ax-table__cell--grow': grow,
    });

    return (
      <Base { ...rest } Component="td" className={ classes }>
        { children }
      </Base>
    );
  }
}
