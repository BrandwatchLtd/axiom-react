import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Grid from '../Grid/Grid';
import GridCell from '../Grid/GridCell';
import DatePickerHeaderControl from './DatePickerHeaderControl';
import DatePickerViewMonth from './DatePickerViewMonth';
import SelectedDateOrRangePropTypes from './SelectedDateOrRangePropTypes';
import {
  addMonths,
  dateOrNow,
  isAfterDay,
  isBeforeDay,
  isSameMonth,
  orderDates,
} from './utils';
import './DatePicker.css';

export default class DatePickerSelection extends Component {
  static propTypes = {
    calendarOpenDate: PropTypes.instanceOf(Date),
    earliestSelectableDate: PropTypes.instanceOf(Date),
    latestSelectableDate: PropTypes.instanceOf(Date),
    onSelect: PropTypes.func.isRequired,
    view: PropTypes.string,
    ...SelectedDateOrRangePropTypes,
  };

  constructor(props) {
    super(props);
    this.handleDaySelect = this.handleDaySelect.bind(this);

    const { calendarOpenDate, rangeSelect, selectedDate } = this.props;
    const [ selectedStartDate, selectedEndDate ] = orderDates(
      this.props.selectedStartDate,
      this.props.selectedEndDate,
    );

    const activeStartDate = dateOrNow(
      (rangeSelect ? selectedStartDate : selectedDate) ||
      calendarOpenDate
    );

    const activeEndDate = rangeSelect && selectedEndDate
      ? (isSameMonth(selectedEndDate, selectedStartDate)
        ? addMonths(selectedEndDate, 1)
        : selectedEndDate)
      : addMonths(activeStartDate, 1);

    this.state = {
      activeStartDate,
      activeEndDate,
    };
  }

  componentDidUpdate(prevProps) {
    const { selectedDate, selectedStartDate, selectedEndDate, rangeSelect, view } = this.props;

    if (!rangeSelect && selectedDate && !prevProps.selectedDate) {
      this.setState({ activeStartDate: selectedDate });
    }

    if (rangeSelect && selectedStartDate !== prevProps.selectedStartDate) {
      this.setState({ activeStartDate: selectedStartDate });
    }

    if (rangeSelect && view === 'double' && selectedEndDate !== prevProps.selectedEndDate) {
      if (isSameMonth(selectedStartDate, selectedEndDate)) {
        this.setState({ activeEndDate: addMonths(selectedEndDate, 1) });
      } else {
        this.setState({ activeEndDate: selectedEndDate });
      }
    }
  }

  handleActiveStartDateChange(direction) {
    this.setState((state) => ({
      activeStartDate: addMonths(state.activeStartDate, direction),
    }));
  }

  handleActiveEndDateChange(direction) {
    this.setState((state) => ({
      activeEndDate: addMonths(state.activeEndDate, direction),
    }));
  }

  handleDaySelect(date) {
    const {
      onSelect,
      rangeSelect,
      selectedStartDate,
      selectedEndDate,
    } = this.props;

    if (!rangeSelect) {
      return onSelect({ date: new Date(date) });
    }

    if (!selectedStartDate ||
        isBeforeDay(date, selectedStartDate)) {
      return onSelect({
        dateStart: new Date(date),
        dateEnd: selectedEndDate && new Date(selectedEndDate),
      });
    }

    if (!selectedEndDate ||
        isAfterDay(date, selectedEndDate)) {
      return onSelect({
        dateStart: new Date(selectedStartDate),
        dateEnd: new Date(date),
      });
    }

    return onSelect({
      dateStart: new Date(date),
      dateEnd: undefined,
    });
  }

  render() {
    const {
      activeEndDate,
      activeStartDate,
    } = this.state;

    const {
      earliestSelectableDate,
      latestSelectableDate,
      rangeSelect,
      selectedDate,
      selectedEndDate,
      selectedStartDate,
      view,
    } = this.props;

    const [ startDate, endDate ] = orderDates(selectedStartDate, selectedEndDate);
    const [ earliestDate, latestDate ] = orderDates(earliestSelectableDate, latestSelectableDate);

    const isDoubleView = view === 'double';

    const activeEndDateOrNextMonth = activeEndDate || addMonths(activeStartDate, 1);

    return (
      <Grid responsive={ false } shrink>
        <GridCell>
          <DatePickerHeaderControl
              date={ activeStartDate }
              earliestSelectableDate={ earliestDate }
              latestSelectableDate={ isDoubleView
                ? addMonths(activeEndDate, -1)
                : latestDate }
              onNext={ () => this.handleActiveStartDateChange(1) }
              onPrevious={ () => this.handleActiveStartDateChange(-1) } />
          <DatePickerViewMonth
              date={ activeStartDate }
              earliestSelectableDate={ earliestDate }
              latestSelectableDate={ latestDate }
              onSelect={ this.handleDaySelect }
              rangeSelect={ rangeSelect }
              selectedDate={ !rangeSelect ? selectedDate : undefined }
              selectedEndDate={ rangeSelect ? endDate : undefined }
              selectedStartDate={ rangeSelect ? startDate : undefined } />
        </GridCell>

        { isDoubleView && (
          <GridCell hiddenUntil="small">
            <DatePickerHeaderControl
                date={ activeEndDateOrNextMonth }
                earliestSelectableDate={ addMonths(activeStartDate, 1) }
                latestSelectableDate={ latestDate }
                onNext={ () => this.handleActiveEndDateChange(1) }
                onPrevious={ () => this.handleActiveEndDateChange(-1) } />
            <DatePickerViewMonth
                date={ activeEndDateOrNextMonth }
                earliestSelectableDate={ earliestDate }
                latestSelectableDate={ latestDate }
                onSelect={ this.handleDaySelect }
                rangeSelect={ rangeSelect }
                selectedDate={ !rangeSelect ? selectedDate : undefined }
                selectedEndDate={ rangeSelect ? endDate : undefined }
                selectedStartDate={ rangeSelect ? startDate : undefined } />
          </GridCell>
        ) }
      </Grid>
    );
  }
}
