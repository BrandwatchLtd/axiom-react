import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import classnames from "classnames";
import Grid from "../Grid/Grid";
import GridCell from "../Grid/GridCell";
import Separator from "../Separator/Separator";
import "./DatePickerRangeSelection.css";

export default class DatePickerRangeSelection extends Component {
  static propTypes = {
    onRangeSelection: PropTypes.func.isRequired,
    rangeSelections: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        range: PropTypes.string.isRequired,
      })
    ).isRequired,
    selectedRange: PropTypes.string,
    view: PropTypes.string,
  };

  render() {
    const {
      onRangeSelection,
      rangeSelections,
      selectedRange,
      view,
    } = this.props;

    const isDoubleView = view === "double";
    const rangeSelection = (
      <div className="ax-date-range-selection">
        {rangeSelections.map(({ label, range }) => {
          const classes = classnames("ax-date-range-selection__item", {
            "ax-date-range-selection__item--active": range === selectedRange,
          });

          return (
            <button
              className={classes}
              key={label}
              onClick={() => onRangeSelection(range)}
            >
              {label}
            </button>
          );
        })}
      </div>
    );

    if (isDoubleView) {
      return (
        <Fragment>
          <Grid hiddenUntil="small" verticalAlign="middle">
            <GridCell>
              <Separator />
            </GridCell>
            <GridCell none>{rangeSelection}</GridCell>
            <GridCell>
              <Separator />
            </GridCell>
          </Grid>
          <Grid
            horizontalAlign="middle"
            responsive={false}
            visibleUntil="small"
          >
            <GridCell shrink>{rangeSelection}</GridCell>
            <GridCell full>
              <Separator />
            </GridCell>
          </Grid>
        </Fragment>
      );
    }

    return (
      <Grid horizontalAlign="middle" responsive={false}>
        <GridCell shrink>{rangeSelection}</GridCell>
        <GridCell full>
          <Separator />
        </GridCell>
      </Grid>
    );
  }
}
