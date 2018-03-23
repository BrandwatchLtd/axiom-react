import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Base from '../Base/Base';
import classnames from 'classnames';
import './TomGrid.css';

export default class TomGrid extends Component {

  static propTypes = {
    autoFlow: PropTypes.oneOf([false, 'row', 'column', 'dense']),
    children: PropTypes.node,
    columnWidth: PropTypes.string,
    gap: PropTypes.oneOf([false, 'tiny', 'small', 'medium', 'large']),
    gapColumn: PropTypes.oneOf([false, 'tiny', 'small', 'medium', 'large']),
    gapRow: PropTypes.oneOf([false, 'tiny', 'small', 'medium', 'large']),
    minColumnWidth: PropTypes.string,
  }

  static defaultProps = {
    columnWidth: '1fr',
    gap: 'medium',
    minColumnWidth: '250px',
  }

  render() {
    const {
      autoFlow,
      columnWidth,
      children,
      /** Controls gap between grid rows and columns */
      gap,
      /** Controls gap between grid columns */
      gapColumn = gap,
      /** Controls gap between grid rows */
      gapRow = gap,
      minColumnWidth,
    } = this.props;

    const classes = classnames('ax-tom-grid', {
      [`ax-tom-grid--column-gap--${gapColumn}`]: typeof gapColumn === 'string',
      [`ax-tom-grid--row-gap--${gapRow}`]: typeof gapRow === 'string',
      [`ax-tom-grid--auto-flow--${autoFlow}`]: typeof autoFlow === 'string',
    });

    const gridStyle = {
      gridTemplateColumns: `repeat(auto-fit, minmax(${minColumnWidth}, ${columnWidth}))`,
    };

    return (
      <Base className={ classes } style={ gridStyle }>
        { children }
      </Base>
    );
  }
}
