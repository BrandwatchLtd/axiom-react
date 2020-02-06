import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import { Base } from '@brandwatch/axiom-components';
import ChartLabel from './ChartLabel';

export default class ChartLayoutLabels extends Component {
  static propTypes = {
    axis: PropTypes.oneOf(['x', 'y']).isRequired,
    labels: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.node,
        value: PropTypes.number.isRequired,
      })),
    ]).isRequired,
    lower: PropTypes.number,
    upper: PropTypes.number,
  };

  static defaultProps = {
    lower: 0,
    upper: 100,
  };

  render() {
    const { axis, labels, lower, upper, ...rest } = this.props;
    const side = axis === 'y' ? 'bottom' : 'left';
    const isPrecise = typeof labels[0].value === 'number';
    const classes = classnames(`ax-chart-layout__${axis}-labels`, {
      'ax-chart-layout__labels--precise': isPrecise,
    });

    if (!labels.some((label) => isPrecise ? label.label : label)) {
      return null;
    }

    if (isPrecise) {
      return (
        <Base { ...rest } className={ classes }>
          { labels.map(({ label, value }, index) => (
            <Fragment key={ index }>
              <div className="ax-chart-layout__label--hidden">
                <ChartLabel>{ label }</ChartLabel>
              </div>
              <div
                  className={ `ax-chart-layout__${axis}-label` }
                  style={ { [side]: `${(value - lower) / (upper - lower) * 100}%` } }>
                <ChartLabel>{ label }</ChartLabel>
              </div>
            </Fragment>
          )) }
        </Base>
      );
    }

    return (
      <Base { ...rest } className={ classes }>
        { labels.map((label, index) => (
          <ChartLabel key={ index }>{ label }</ChartLabel>
        )) }
      </Base>
    );
  }
}
