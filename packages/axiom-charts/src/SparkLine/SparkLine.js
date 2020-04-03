import PropTypes from "prop-types";
import React, { Component } from "react";
import { Base } from "@brandwatch/axiom-components";
import Line from "../Line/Line";
import LinePoint from "../Line/LinePoint";
import "./SparkLine.css";

export default class SparkLine extends Component {
  static propTypes = {
    /** Benchmarking line value */
    benchmark: PropTypes.number,
    /**
     * The data used to render the lines and final Point of the last data
     * entry.
     */
    data: PropTypes.arrayOf(
      PropTypes.shape({
        lineColor: PropTypes.string.isRequired,
        pointColor: PropTypes.string,
        values: PropTypes.array.isRequired,
      })
    ).isRequired,
    /** Height of the line area */
    height: PropTypes.string.isRequired,
    /** Size of the line point */
    pointSize: PropTypes.string,
  };

  static defaultProps = {
    pointSize: ".5rem",
  };

  render() {
    const { benchmark, data, height, pointSize } = this.props;
    const flatValues = [].concat(...data.map(({ values }) => values));

    if (benchmark !== undefined) {
      flatValues.push(benchmark);
    }

    let lower = Math.min(...flatValues);
    let upper = Math.max(...flatValues);

    if (upper === lower) {
      lower--;
      upper++;
    }

    return (
      <Base className="ax-spark-line" style={{ height }}>
        {benchmark !== undefined && (
          <div className="ax-spark-line__line">
            <Line
              color="subtle"
              data={[benchmark, benchmark]}
              height={height}
              lower={lower}
              upper={upper}
              width="0.0625rem"
            />
          </div>
        )}

        {data.map(({ lineColor, pointColor, values }, index) => (
          <div className="ax-spark-line__line" key={index}>
            <Line
              color={lineColor}
              data={values}
              height={height}
              lower={lower}
              upper={upper}
              width="0.09375rem"
            >
              {pointColor &&
                values.map((_, index, { length }) =>
                  index + 1 < length ? null : (
                    <LinePoint
                      color={pointColor}
                      key={index}
                      size={pointSize}
                    />
                  )
                )}
            </Line>
          </div>
        ))}
      </Base>
    );
  }
}
