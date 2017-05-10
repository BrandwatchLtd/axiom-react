import PropTypes from 'prop-types';
import React, { Component } from 'react';
import omit from 'lodash.omit';
import { Base } from 'bw-axiom';
import './ChartTable.css';

export default class ChartTable extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    collapsedVisibleRowCount: PropTypes.number,
    expandButtonSuffix: PropTypes.string,
    labelColumnWidth: PropTypes.string,
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
    const { children, ...rest } = this.props;

    return (
      <Base
          { ...omit(rest, [
            'collapsedVisibleRowCount',
            'expandButtonSuffix',
            'labelColumnWidth',
          ]) }
          className="ax-chart-table">
        { children }
      </Base>
    );
  }
}
