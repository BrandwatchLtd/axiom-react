import PropTypes from "prop-types";
import React, { Component } from "react";
import ChartLayout from "../ChartLayout/ChartLayout";
import ChartLayoutKey from "../ChartLayout/ChartLayoutKey";
import ChartLayoutLabels from "../ChartLayout/ChartLayoutLabels";
import ChartLayoutTitle from "../ChartLayout/ChartLayoutTitle";
import ChartLayoutVisual from "../ChartLayout/ChartLayoutVisual";
import ChartKey from "../Chart/ChartKey";
import ChartKeyItem from "../Chart/ChartKeyItem";
import ChartGrid from "../ChartGrid/ChartGrid";
import DataPoint from "../DataPoint/DataPoint";
import DataPoints from "../DataPoint/DataPoints";
import Line from "../Line/Line";
import LinePoint from "../Line/LinePoint";
import "./LineChart.css";

export default class LineChart extends Component {
  static propTypes = {
    /**
     * Contextual component that appears when clicking on a data point.
     * It is provided with the `color`, `label`, `index`, and `value` that has
     * been clicked on.
     */
    DropdownContext: PropTypes.func,
    /**
     * Contextual component that appears when hovering on a data point.
     * It is provided with the `color`, `label`, `index`, and `value` that has
     * been hovered over.
     */
    TooltipContext: PropTypes.func,
    /**
     * The key that is shown along the bottom of the axis. It is also used
     * to determine the order of lines and points.
     */
    chartKey: PropTypes.arrayOf(
      PropTypes.shape({
        color: PropTypes.string.isRequired,
        style: PropTypes.oneOf(["dashed", "solid"]),
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
    /**
     * The data used to render the line and points. The `label` is used
     * to lookup color and style from the `chartKey`.
     */
    data: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.node.isRequired,
        values: PropTypes.array.isRequired,
      })
    ).isRequired,
    /** Height of the line area */
    height: PropTypes.string.isRequired,
    /** Lower value of the data displayed on the chart */
    lower: PropTypes.number,
    /** Call back for when a point is clicked */
    onPointClick: PropTypes.func,
    /** Upper value of the data displayed on the chart */
    upper: PropTypes.number,
    /**
     * Labels to be shown along the xAxis. Each label contains either of a string
     * or an object of a `value`, defining the position on the xAxis in percent,
     * and an optional `label`.
     */
    xAxisLabels: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.node,
          value: PropTypes.number.isRequired,
        })
      ),
    ]),
    /** The title that appears along the xAxis */
    xAxisTitle: PropTypes.node,
    /**
     * Labels to be shown along the yAxis, also used to determine where
     * grid lines are drawn
     */
    yAxisLabels: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.node,
        value: PropTypes.number.isRequired,
      })
    ),
    /** The title that appears along the yAxis */
    yAxisTitle: PropTypes.node,
  };

  static defaultProps = {
    xAxisLabels: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      selectedIndex: null,
      selectedLabel: null,
    };
  }

  handleDropdownOpen(selectedIndex, selectedLabel) {
    this.setState({
      isDropdownOpen: true,
      selectedIndex,
      selectedLabel,
    });
  }

  handleDropdownClose() {
    this.setState({
      isDropdownOpen: false,
      selectedIndex: null,
      selectedLabel: null,
    });
  }

  handleMouseEnter(selectedIndex, selectedLabel) {
    this.setState({
      selectedIndex,
      selectedLabel,
    });
  }

  handleMouseLeave() {
    this.setState(({ isDropdownOpen }) =>
      isDropdownOpen
        ? {}
        : {
            selectedIndex: null,
            selectedLabel: null,
          }
    );
  }

  render() {
    const flatValues = []
      .concat(...this.props.data.map(({ values }) => values))
      .filter((n) => !isNaN(n) && n !== null);
    const dataLower = Math.min(...flatValues);
    const dataUpper = Math.max(...flatValues);
    const {
      DropdownContext,
      TooltipContext,
      chartKey,
      data,
      height,
      lower = dataLower,
      onPointClick,
      upper = dataUpper,
      xAxisLabels,
      xAxisTitle,
      yAxisLabels,
      yAxisTitle,
      ...rest
    } = this.props;
    const { selectedIndex, selectedLabel } = this.state;
    const finalLower = Math.min(lower, dataLower);
    const finalUpper = Math.max(upper, dataUpper);
    const labelMap = chartKey.reduce(
      (map, { color, label, style }) => ({ ...map, [label]: { color, style } }),
      {}
    );

    return (
      <ChartLayout {...rest}>
        {xAxisTitle && (
          <ChartLayoutTitle axis="x">{xAxisTitle}</ChartLayoutTitle>
        )}
        {yAxisTitle && (
          <ChartLayoutTitle axis="y">{yAxisTitle}</ChartLayoutTitle>
        )}
        {xAxisLabels.length > 0 && (
          <ChartLayoutLabels axis="x" labels={xAxisLabels} />
        )}
        {yAxisLabels && (
          <ChartLayoutLabels
            axis="y"
            labels={yAxisLabels}
            lower={finalLower}
            upper={finalUpper}
          />
        )}

        <ChartLayoutVisual>
          <ChartGrid axis="y" labels={yAxisLabels} lower={lower} upper={upper}>
            <div className="ax-line-chart__lines" style={{ height }}>
              {data.map(({ label, values }) => (
                <div className="ax-line-chart__line" key={label}>
                  <Line
                    color={labelMap[label].color}
                    dasharray={
                      labelMap[label].style === "dashed"
                        ? "0.125rem 0.25rem"
                        : ""
                    }
                    dasharrayWithoutScalingStroke={
                      labelMap[label].style === "dashed"
                        ? "0.03125rem 0.0625rem"
                        : ""
                    }
                    data={values}
                    faded={selectedLabel && selectedLabel !== label}
                    height={height}
                    lower={finalLower}
                    upper={finalUpper}
                  >
                    {values.map((_, index) => (
                      <LinePoint
                        DropdownContext={DropdownContext}
                        TooltipContext={TooltipContext}
                        color={labelMap[label].color}
                        hover={
                          selectedIndex === index && selectedLabel === label
                        }
                        index={index}
                        key={index}
                        label={label}
                        onClick={onPointClick}
                        onDropdownClose={() => this.handleDropdownClose()}
                        onDropdownOpen={() =>
                          this.handleDropdownOpen(index, label)
                        }
                        onMouseEnter={() => this.handleMouseEnter(index, label)}
                        onMouseLeave={() => this.handleMouseLeave()}
                        size=".5rem"
                      />
                    ))}
                  </Line>
                </div>
              ))}
            </div>
          </ChartGrid>
        </ChartLayoutVisual>

        <ChartLayoutKey>
          <ChartKey>
            {chartKey.map(({ label, color, style }) => (
              <ChartKeyItem key={`${label}.${color}`} label={label}>
                <DataPoints size="0.75rem">
                  <DataPoint
                    color={color}
                    style={style === "dashed" ? "hollow" : "solid"}
                  />
                </DataPoints>
              </ChartKeyItem>
            ))}
          </ChartKey>
        </ChartLayoutKey>
      </ChartLayout>
    );
  }
}
