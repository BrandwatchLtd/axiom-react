import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';

if (__INCLUDE_CSS__) {
  require('./Table.scss');
}

export default class Table extends Component {
  static propTypes = {
    borders: PropTypes.bool,
    children: PropTypes.node,
    compact: PropTypes.bool,
    hGutters: PropTypes.oneOf(['small', 'medium']),
  };

  static defaultProps = {
    borders: true,
    hGutters: 'medium',
  };

  render() {
    const {
      children,
      compact,
      borders,
      hGutters,
      ...rest
    } = this.props;

    const classes = classnames('ax-table', {
      'ax-table--compact': compact,
      'ax-table--borders': borders === true,
      [`ax-table--gutters-${hGutters}-h`]: true,
    });

    return (
      <Base space="medium" { ...rest } Component="table" className={ classes }>
        { children }
      </Base>
    );
  }
}
