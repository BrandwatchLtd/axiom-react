import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

export default class TableHead extends Component {
  static propTypes = {
    children: PropTypes.node,
    rowPadding: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  };

  render() {
    const { children, rowPadding, ...rest } = this.props;
    const classes = classnames('ax-table__head', {
      [`ax-table__head--row-padding-${rowPadding}`]: rowPadding,
    });

    return (
      <Base { ...rest } Component="thead" className={ classes }>
        { children }
      </Base>
    );
  }
}
