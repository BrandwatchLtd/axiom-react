import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base } from 'bw-axiom';
import './Table.css';

export default class Table extends Component {
  static propTypes = {
    borders: PropTypes.bool,
    children: PropTypes.node,
    columnPadding: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
    rowPadding: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  };

  static defaultProps = {
    borders: true,
    columnPadding: 'small',
    rowPadding: 'small',
  };

  render() {
    const { children, borders, columnPadding, rowPadding, ...rest } = this.props;
    const classes = classnames('ax-table', {
      'ax-table--borders': borders === true,
      [`ax-table--column-padding-${columnPadding}`]: columnPadding,
      [`ax-table--row-padding-${rowPadding}`]: rowPadding,
    });

    return (
      <Base space="medium" { ...rest } Component="table" className={ classes }>
        { children }
      </Base>
    );
  }
}
