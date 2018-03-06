import PropTypes from 'prop-types';
import React, { Component, Children } from 'react';
import classnames from 'classnames';
import { Grid, GridCell, Icon, Link, Reveal, Small, Strong } from '@brandwatch/axiom-components';

export default class ChartTableRows extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    collapsedVisibleRowCount: PropTypes.number,
    expandButtonSuffix: PropTypes.string,
    labelColumnWidth: PropTypes.string.isRequired,
    space: PropTypes.oneOf(['x1', 'x2', 'x3']),
    xAxisLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
    zoomTo: PropTypes.number,
  };

  static defaultProps = {
    expandButtonSuffix: 'Items',
    space: 'x2',
    zoomTo: 100,
  };

  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
    };

    this.toggleReveal = () => {
      this.setState({ collapsed: !this.state.collapsed });
    };
  }

  render() {
    const {
      children,
      collapsedVisibleRowCount,
      expandButtonSuffix,
      labelColumnWidth,
      space,
      xAxisLabels,
      zoomTo,
      ...rest
    } = this.props;

    const { collapsed } = this.state;
    const collapsible = collapsedVisibleRowCount !== undefined &&
      children.length > collapsedVisibleRowCount;

    const zoomWidth = `calc(${labelColumnWidth} +
      ((100% - ${labelColumnWidth}) / 100) * (${100 * (100 / zoomTo)})
    )`;

    const classes = classnames(
      'ax-chart-table__rows-container',
      `ax-chart-table__rows-container--space-${space}`);

    return (
      <div { ...rest } className={ classes }>
        <div className="ax-chart-table__grid-container" style={ { width: zoomWidth } }>
          <div className="ax-chart-table__grid" style={ { left: labelColumnWidth } }>
            { xAxisLabels.map((label, index) =>
              <div
                  className="ax-chart-table__grid-line"
                  key={ label }
                  style={ { left: `${index * (100 / (xAxisLabels.length - 1))}%` } }>
                <span className="ax-chart-table__xAxis-label">
                  <Small textColor="subtle">{ label }</Small>
                </span>
              </div>
            ) }
          </div>

          { collapsible
              ? Children.toArray(children).slice(0, collapsedVisibleRowCount)
              : children }

          { collapsible && (
            <Reveal visible={ !collapsed }>
              { Children.toArray(children).slice(collapsedVisibleRowCount) }
            </Reveal>
          ) }
        </div>

        <div
            className="ax-chart-table__collapse"
            style={ { visibility: collapsible ? 'visible' : 'hidden' } }>
          <Link onClick={ this.toggleReveal } style="subtle">
            <Grid gutters="tiny" responsive={ false } verticalAlign="middle">
              <GridCell shrink>
                <Icon name={ `box-${collapsed ? 'expand' : 'collapse'}` }/>
              </GridCell>
              <GridCell shrink>
                <Strong>
                  { collapsed
                      ? `See All ${children.length} ${expandButtonSuffix}`
                      : 'Collapse' }
                </Strong>
              </GridCell>
            </Grid>
          </Link>
        </div>
      </div>
    );
  }
}
