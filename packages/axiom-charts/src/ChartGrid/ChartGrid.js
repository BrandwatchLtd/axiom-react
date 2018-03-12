import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Base } from '@brandwatch/axiom-components';
import './ChartGrid.css';

export default class ChartGrid extends Component {
  static propTypes = {
    axis: PropTypes.oneOf(['x', 'y']).isRequired,
    children: PropTypes.node.isRequired,
    labels: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.number.isRequired,
    })),
    lower: PropTypes.number.isRequired,
    upper: PropTypes.number.isRequired,
  };

  render() {
    const { children, axis, labels, lower, upper, ...rest } = this.props;
    const side = axis === 'y' ? 'top' : 'left';
    const classes = classnames('ax-chart-grid', `ax-chart-grid--${axis}`);

    if (!labels) {
      return children;
    }

    return (
      <Base { ...rest } className={ classes }>
        <div className="ax-chart-grid__lines">
          { labels.map(({ value }, index) => (
            <div
                className="ax-chart-grid__line"
                key={ index }
                style={ { [side]: `${100 - ((value - lower) / (upper - lower)) * 100}%` } } />
          )) }
        </div>

        <div className="ax-chart-grid__chart">
          { children }
        </div>
      </Base>
    );
  }
}
