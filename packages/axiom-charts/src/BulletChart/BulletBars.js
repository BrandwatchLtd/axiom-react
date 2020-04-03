import PropTypes from "prop-types";
import React, { Component } from "react";
import { Base } from "@brandwatch/axiom-components";
import Bar from "../Bar/Bar";
import Bars from "../Bar/Bars";
import { findBarGroupMax } from "./utils";

export default class BulletBars extends Component {
  static propTypes = {
    barLabel: PropTypes.number,
    direction: PropTypes.string,
    label: PropTypes.string,
    showBarLabel: PropTypes.bool,
    values: PropTypes.array.isRequired,
  };

  render() {
    const {
      direction,
      label,
      barLabel,
      showBarLabel,
      values,
      ...rest
    } = this.props;

    const barGroupMax = values.reduce(findBarGroupMax);

    return (
      <Base {...rest} className="ax-bullet-chart__block">
        <div className="ax-bullet-chart__bars">
          {values.map(({ color, value }) => (
            <div className="ax-bullet-chart__bars-bar" key={`${color}-div`}>
              <Bars direction={direction} label={label}>
                <Bar
                  color={color}
                  key={color}
                  label={`${barLabel}%`}
                  percent={value}
                  showLabel={value === barGroupMax && showBarLabel}
                />
              </Bars>
            </div>
          ))}
        </div>
      </Base>
    );
  }
}
