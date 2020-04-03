import PropTypes from "prop-types";
import React, { Component } from "react";
import Base from "../Base/Base";
import Grid from "../Grid/Grid";
import GridCell from "../Grid/GridCell";
import DatePickerDay from "./DatePickerDay";
import {
  buildMonthGrid,
  isAfterDay,
  isBeforeDay,
  isBetweenDate,
  isSameDay,
  isOneOfDays,
} from "./utils";

export default class DatePickerViewMonth extends Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    earliestSelectableDate: PropTypes.instanceOf(Date),
    latestSelectableDate: PropTypes.instanceOf(Date),
    onSelect: PropTypes.func.isRequired,
    rangeSelect: PropTypes.bool,
    selectedDate: PropTypes.instanceOf(Date),
    selectedEndDate: PropTypes.instanceOf(Date),
    selectedStartDate: PropTypes.instanceOf(Date),
  };

  render() {
    const {
      date,
      earliestSelectableDate,
      latestSelectableDate,
      onSelect,
      rangeSelect,
      selectedDate,
      selectedEndDate,
      selectedStartDate,
    } = this.props;

    const selectedDates = [selectedDate, selectedEndDate, selectedStartDate];

    return (
      <Base space="x4">
        <Grid
          gutters={false}
          responsive={false}
          space="x2"
          textCenter
          textColor="subtle"
          textSize="small"
        >
          <GridCell>Mon</GridCell>
          <GridCell>Tue</GridCell>
          <GridCell>Wed</GridCell>
          <GridCell>Thu</GridCell>
          <GridCell>Fri</GridCell>
          <GridCell>Sat</GridCell>
          <GridCell>Sun</GridCell>
        </Grid>

        {buildMonthGrid(date).map((week, rowIndex) => (
          <Grid
            gutters={false}
            key={rowIndex}
            responsive={false}
            shrink
            space="x2"
          >
            {week.map((date, cellIndex) => (
              <GridCell key={cellIndex}>
                <DatePickerDay
                  date={date}
                  disabled={
                    isBeforeDay(date, earliestSelectableDate) ||
                    isAfterDay(date, latestSelectableDate)
                  }
                  onSelect={onSelect}
                  selected={isOneOfDays(date, selectedDates)}
                  selectedEnd={
                    rangeSelect &&
                    !!selectedStartDate &&
                    isSameDay(date, selectedEndDate) &&
                    !isSameDay(selectedStartDate, selectedEndDate)
                  }
                  selectedStart={
                    rangeSelect &&
                    !!selectedEndDate &&
                    isSameDay(date, selectedStartDate) &&
                    !isSameDay(selectedStartDate, selectedEndDate)
                  }
                  selection={
                    rangeSelect &&
                    isBetweenDate(date, selectedStartDate, selectedEndDate)
                  }
                  weekEnd={!week[cellIndex + 1]}
                  weekStart={!week[cellIndex - 1]}
                />
              </GridCell>
            ))}
          </Grid>
        ))}
      </Base>
    );
  }
}
