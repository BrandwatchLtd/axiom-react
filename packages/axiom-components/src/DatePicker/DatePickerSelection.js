import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Grid from '../Grid/Grid';
import GridCell from '../Grid/GridCell';
import DatePickerHeaderControl from './DatePickerHeaderControl';
import DatePickerViewMonth from './DatePickerViewMonth';
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
  /** If you change the propTypes it would be great if you could also change the typescript file (axiom-components/src/index.d.ts) */
  static propTypes = {
    /**
     * The date that should be shown to the user when the picker opens.
     * When a selected date or range is given, that supersedes this
     * property. Defaults to 'today'.
     */
    calendarOpenDate: PropTypes.instanceOf(Date),
    /** A lower limit to the earliest date that can be selected */
    earliestSelectableDate: PropTypes.instanceOf(Date),
    /** An upper limit to the latest date that can be selected */
    latestSelectableDate: PropTypes.instanceOf(Date),
    /** Callback for when a date, range with endDate and startDate, or a range
     * out of rangeSelections has been selected */
    onSelect: PropTypes.func.isRequired,
    /** Whether a date range can be selected */
    rangeSelect: PropTypes.bool,
    /** Predefined date ranges offered for selection. label will be shown and
     * range is passed to onSelect when clicked. */
    // eslint-disable-next-line react/no-unused-prop-types
    rangeSelections: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        range: PropTypes.string.isRequired,
      }),
    ),
    /** A single date that appears selected */
    selectedDate: PropTypes.instanceOf(Date),
    /** The date selected at the end of the range */
    selectedEndDate: PropTypes.instanceOf(Date),
    /** The selected range, specified as it's label */
    // eslint-disable-next-line react/no-unused-prop-types
    selectedRange: PropTypes.string,
    /** The date selected at the start of the range */
    selectedStartDate: PropTypes.instanceOf(Date),
    /** Configuration for a single date picker view or two pickers side by side */
    view: PropTypes.oneOf(['single', 'double']),
  };

  static defaultProps = {
    view: 'single',
    rangeSelect: false,
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
