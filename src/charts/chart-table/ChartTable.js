import PropTypes from 'prop-types';
import React, { Component } from 'react';
import omit from 'lodash.omit';
import classnames from 'classnames';
import { Base } from 'bw-axiom';
import './ChartTable.css';

export default class ChartTable extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    collapsedVisibleRowCount: PropTypes.number,
    expandButtonSuffix: PropTypes.string,
    labelColumnWidth: PropTypes.string,
    responsive: PropTypes.bool,
  };

  static childContextTypes = {
    collapsedVisibleRowCount: PropTypes.number,
    collapsible: PropTypes.bool.isRequired,
    expandButtonSuffix: PropTypes.string.isRequired,
    isExpanded: PropTypes.bool.isRequired,
    labelColumnWidth: PropTypes.string,
    rowsCount: PropTypes.number.isRequired,
    setRowsCount: PropTypes.func.isRequired,
    toggleExpand: PropTypes.func.isRequired,
  };

  static defaultProps = {
    expandButtonSuffix: 'Items',
    labelColumnWidth: '10rem',
    responsive: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      isExpanded: this.props.collapsedVisibleRowCount == null,
      rowsCount: 0,
    };
    this.setRowsCount = rowsCount => this.setState({ rowsCount });
    this.toggleExpand = () => this.setState(state => ({ isExpanded: !state.isExpanded }));
  }

  getChildContext() {
    const {
      collapsedVisibleRowCount,
      expandButtonSuffix,
      labelColumnWidth,
    } = this.props;

    const collapsible = collapsedVisibleRowCount != null &&
      this.state.rowsCount > collapsedVisibleRowCount;

    return {
      collapsedVisibleRowCount,
      collapsible,
      expandButtonSuffix,
      isExpanded: this.state.isExpanded,
      labelColumnWidth,
      toggleExpand: this.toggleExpand,
      rowsCount: this.state.rowsCount,
      setRowsCount: this.setRowsCount,
    };
  }

  render() {
    const { children, responsive, ...rest } = this.props;
    const classes = classnames('ax-chart-table', {
      'ax-chart-table--responsive': responsive,
    });

    return (
      <Base
          { ...omit(rest, [
            'collapsedVisibleRowCount',
            'expandButtonSuffix',
            'labelColumnWidth',
          ]) }
          className={ classes }>
        { children }
      </Base>
    );
  }
}
