import PropTypes from 'prop-types';
import React, { Component } from 'react';
import DropdownContent from '../Dropdown/DropdownContent';
import DropdownContext from '../Dropdown/DropdownContext';
import Grid from '../Grid/Grid';
import GridCell from '../Grid/GridCell';
import DatePickerControls from './DatePickerControls';
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

export default class DatePickerContext extends Component {
  static propTypes = {
    earliestSelectableDate: PropTypes.instanceOf(Date),
    initialDate: PropTypes.instanceOf(Date),
    latestSelectableDate: PropTypes.instanceOf(Date),
    onApply: PropTypes.func,
    onCancel: PropTypes.func,
    onSelect: PropTypes.func.isRequired,
    rangeSelect: PropTypes.bool,
    selectedDate: PropTypes.instanceOf(Date),
    selectedEndDate: PropTypes.instanceOf(Date),
    selectedStartDate: PropTypes.instanceOf(Date),
    view: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.handleDaySelect = this.handleDaySelect.bind(this);

    const { initialDate, rangeSelect, selectedDate } = this.props;
    const [ selectedStartDate, selectedEndDate ] = orderDates(
      this.props.selectedStartDate,
      this.props.selectedEndDate,
    );

    const activeStartDate = dateOrNow(
      (rangeSelect ? selectedStartDate : selectedDate) ||
      initialDate
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
      onApply,
      onCancel,
      view,
      ...rest
    } = this.props;

    const [ startDate, endDate ] = orderDates(selectedStartDate, selectedEndDate);
    const [ earliestDate, latestDate ] = orderDates(earliestSelectableDate, latestSelectableDate);

    const isDoubeView = view === 'double';

    return (
      <DropdownContext { ...rest }>
        <DropdownContent hasFullSeparator>
          <Grid responsive={ false } shrink>
            <GridCell>
              <DatePickerHeaderControl
                  date={ activeStartDate }
                  earliestSelectableDate={ earliestDate }
                  latestSelectableDate={ isDoubeView
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

            { isDoubeView && (
              <GridCell hiddenUntil="small">
                <DatePickerHeaderControl
                    date={ activeEndDate }
                    earliestSelectableDate={ addMonths(activeStartDate, 1) }
                    latestSelectableDate={ latestDate }
                    onNext={ () => this.handleActiveEndDateChange(1) }
                    onPrevious={ () => this.handleActiveEndDateChange(-1) } />
                <DatePickerViewMonth
                    date={ activeEndDate }
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
        </DropdownContent>

        <DropdownContent>
          <DatePickerControls
              onApply={ onApply }
              onCancel={ onCancel }
              rangeSelect={ rangeSelect }
              selectedDate={ selectedDate }
              selectedEndDate={ endDate }
              selectedStartDate={ startDate }
              view={ view } />
        </DropdownContent>
      </DropdownContext>
    );
  }
}
