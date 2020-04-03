import PropTypes from "prop-types";
import React, { Component } from "react";
import { Base } from "@brandwatch/axiom-components";
import ChartKey from "../Chart/ChartKey";
import ChartKeyItem from "../Chart/ChartKeyItem";
import DataPoint from "../DataPoint/DataPoint";
import DataPoints from "../DataPoint/DataPoints";
import RadarPoint from "./RadarPoint";
import RadarPolygon from "./RadarPolygon";
import RadarXAxisLabel from "./RadarXAxisLabel";
import RadarXAxisLine from "./RadarXAxisLine";
import RadarYAxisLabel from "./RadarYAxisLabel";
import RadarYAxisLine from "./RadarYAxisLine";
import groupColorsByValue from "./groupColorsByValue";
import "./RadarChart.css";

const LABEL_PADDING = 16;
const TICK_PADDING = 16;

export default class RadarChart extends Component {
  static propTypes = {
    /**
     * Contextual component that appears when clicking on a data point.
     * It is provided with the `colors`, `label` and `value` that has
     * been clicked on.
     */
    DropdownContext: PropTypes.func,
    /**
     * Contextual component that appears when hovering on a data point.
     * It is provided with the `colors`, `label` and `value` that has
     * been hovered over.
     */
    TooltipContext: PropTypes.func,
    /**
     * The data used to render the polygons and points. Has configuration
     * options for setting `border`, `fill` and `points`. See example
     * for data format.
     */
    data: PropTypes.arrayOf(
      PropTypes.shape({
        border: PropTypes.bool,
        color: PropTypes.string.isRequired,
        fill: PropTypes.bool,
        label: PropTypes.node.isRequired,
        points: PropTypes.bool,
        values: PropTypes.arrayOf(PropTypes.number).isRequired,
      })
    ),
    /** Height of the radar chart */
    height: PropTypes.number.isRequired,
    /** Callback for when a point is clicked */
    onPointClick: PropTypes.func,
    /** Callback for when an X Axis label is clicked */
    onXAxisLabelClick: PropTypes.func,
    /** Width of the radar chart */
    width: PropTypes.number.isRequired,
    /** X Axis labels */
    xAxisLabels: PropTypes.arrayOf(PropTypes.node).isRequired,
    /** Y Axis labels, also used to determine where the radial
     *  grid lines are drawn by the value property.
     */
    yAxisLabels: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      })
    ).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      selectedIndex: undefined,
      selectedLabels: undefined,
    };
  }

  handleDropdownOpen(selectedIndex, selectedLabels) {
    this.setState({
      isDropdownOpen: true,
      selectedIndex,
      selectedLabels,
    });
  }

  handleDropdownClose() {
    this.setState({
      isDropdownOpen: false,
      selectedIndex: undefined,
      selectedLabels: undefined,
    });
  }

  handleMouseEnter(selectedIndex, selectedLabels) {
    this.setState({ selectedIndex, selectedLabels });
  }

  handleMouseLeave() {
    this.setState(({ isDropdownOpen }) =>
      isDropdownOpen
        ? {}
        : {
            selectedIndex: undefined,
            selectedLabels: undefined,
          }
    );
  }

  render() {
    const {
      DropdownContext,
      TooltipContext,
      data,
      height,
      onPointClick,
      onXAxisLabelClick,
      width,
      xAxisLabels,
      yAxisLabels,
      ...rest
    } = this.props;

    const { selectedIndex, selectedLabels } = this.state;

    const cx = width / 2;
    const cy = height / 2;
    const outerRadius = cy;
    const innerRadius = outerRadius - TICK_PADDING - LABEL_PADDING;
    const tickGap = (Math.PI * 2) / xAxisLabels.length;
    const tickValues = yAxisLabels.map(({ value }) => value);
    const lower = Math.min(...tickValues);
    const upper = Math.max(...tickValues);
    const plot = (value) => innerRadius * ((value - lower) / (upper - lower));
    const xAxisTicks = xAxisLabels.map(
      (_, index) => Math.PI * -0.5 + tickGap / 2 + index * tickGap
    );
    const yAxisTicks = tickValues.map((value) => value && plot(value));
    const points = groupColorsByValue(
      data.filter(({ points }) => points),
      selectedLabels
    );

    return (
      <Base {...rest} className="ax-radar">
        <div
          className="ax-radar__container"
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          <svg
            className="ax-radar__svg-container"
            viewBox={`0 0 ${width} ${height}`}
          >
            {yAxisTicks.map((r, index) => (
              <RadarYAxisLine key={index} r={r} x={cx} y={cy} />
            ))}

            {xAxisTicks.map((r, index) => (
              <RadarXAxisLine
                key={index}
                x1={cx}
                x2={cx + Math.cos(r) * (innerRadius + TICK_PADDING)}
                y1={cy}
                y2={cy + Math.sin(r) * (innerRadius + TICK_PADDING)}
              />
            ))}

            {data.map(({ border, label, ...rest }, index) => (
              <RadarPolygon
                {...rest}
                border={
                  border && (!selectedLabels || selectedLabels.includes(label))
                }
                cx={cx}
                cy={cy}
                faded={selectedLabels && !selectedLabels.includes(label)}
                key={index}
                lower={lower}
                radius={innerRadius}
                ticks={xAxisTicks}
                upper={upper}
              />
            ))}
          </svg>

          {xAxisLabels.map((label, index) => (
            <RadarXAxisLabel
              active={selectedIndex === index}
              key={index}
              onClick={onXAxisLabelClick}
              r={xAxisTicks[index]}
              x={cx + Math.cos(xAxisTicks[index]) * outerRadius}
              y={cy + Math.sin(xAxisTicks[index]) * outerRadius}
            >
              {label}
            </RadarXAxisLabel>
          ))}

          {yAxisLabels.map(({ label }, index) => (
            <RadarYAxisLabel key={index} x={cx} y={cy - yAxisTicks[index]}>
              {label}
            </RadarYAxisLabel>
          ))}

          {points.map((points, a) =>
            points.map(({ colors, labels, value }, b) => (
              <RadarPoint
                DropdownContext={DropdownContext}
                TooltipContext={TooltipContext}
                colors={colors}
                key={`${a}${b}`}
                label={xAxisLabels[a]}
                onClick={onPointClick}
                onDropdownClose={() => this.handleDropdownClose()}
                onDropdownOpen={() => this.handleDropdownOpen(a, labels)}
                onMouseEnter={() => this.handleMouseEnter(a, labels)}
                onMouseLeave={() => this.handleMouseLeave()}
                value={value}
                x={cx + Math.cos(xAxisTicks[a]) * plot(value)}
                y={cy + Math.sin(xAxisTicks[a]) * plot(value)}
              />
            ))
          )}
        </div>

        <ChartKey space="x8">
          {data.map(({ label, color, style }) => (
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
      </Base>
    );
  }
}
