import PropTypes from 'prop-types';
import React, { Component, Children } from 'react';
import { Grid, GridCell, Icon, Link, Reveal, Small, Strong } from 'bw-axiom';

export default class ChartTableRows extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    collapsedVisibleRowCount: PropTypes.number,
    expandButtonSuffix: PropTypes.string,
    labelColumnWidth: PropTypes.string.isRequired,
    xAxisLabels: PropTypes.arrayOf(PropTypes.string),
    zoomTo: PropTypes.number,
  };

  static defaultProps = {
    expandButtonSuffix: 'Items',
    xAxisLabels: [ '0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
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

    return (
      <div { ...rest } className="ax-chart-table__rows-container">
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
              <GridCell shrink={ true }>
                <Icon name={ `box-${collapsed ? 'expand' : 'collapse'}` }/>
              </GridCell>
              <GridCell shrink={ true }>
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
